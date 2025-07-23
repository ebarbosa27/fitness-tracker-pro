import { useNavigate, useParams } from "react-router";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";

export default function ActivityItem() {
  const { activityId } = useParams();
  const { data: activity, loading, error } = useQuery(`/activities/${activityId}`, "activities");

  if (loading) return <p>Loading. . .</p>;
  if (error) {
    console.log(error);
    return <p>Error </p>;
  }

  if (activity) {
    return (
      <div className="activityItem">
        <h2>Selected Activity</h2>
        <br />
        <h3>{activity.name}</h3>
        <div>
          <p>Description:</p>
          <p>{activity.description}</p>
        </div>
        <div>
          <p>Contributor:</p>
          <p>{activity.creatorName}</p>
        </div>
        <DelActButton />
      </div>
    );
  }
}

function DelActButton() {
  const { activityId } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", "/activities/" + activityId, ["activities"]);

  if (token) {
    return (
      <button
        onClick={() => {
          deleteActivity();
          navigate("/");
        }}
      >
        {loading ? "Deleting" : error ? error : "Delete"}
      </button>
    );
  }
}
