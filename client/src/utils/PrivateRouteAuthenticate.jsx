import { Outlet, Navigate, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { dataService } from "../apiAndServices/dataService";
export default function PrivateRouteAuthenticate() {
  const { isAuthenticated, _id } = useAuthContext();
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const checkOwnership = async () => {
      if (params.id) {
        try {
          const program = await dataService.getTrainingProgram(params.id);
          const ownerFound = program.owner === _id;
          setIsOwner(ownerFound);
        } catch (error) {
          console.error("Error fetching program data:", error);
        }
      }
      setLoading(false);
    };

    if (isAuthenticated) {
      checkOwnership();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, params.id, _id]);

  if (loading) {
    return <div>Loading...</div>; // or some kind of loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (params.id && !isOwner) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

// useEffect(() => {
//   (async () => {
//     if (params.id) {
//       try {
//         const program = await dataService.getTrainingProgram(params.id);
//         const ownerFound = program.owner === _id;
//         console.log(ownerFound);

//         if (ownerFound) {
//           setIsOwner(!isOwner);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   })();
// }, []);

// if (!isAuthenticated) {
//   <Navigate to="/login" />;
// }
// console.log(params.id);
// console.log(isOwner);

// if (params.id && !isOwner) {
//   return <Navigate to="/login" />;
// }

// return (
//   <>
//     <Outlet />
//   </>
// );
