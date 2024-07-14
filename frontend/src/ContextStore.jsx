import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { account, databases } from "../Appwrite";

const ContextStore = createContext();

const ThemeProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [daysAvailable, setDaysAvailable] = useState([]);
  const [data, setData] = useState([]);
  const [timeAvailable, setTimeAvailable] = useState([]);
  const [userLocation, setUserLocation] = useState("");

  const [currentUserID, setCurrentUserID] = useState();
  const [dataFetched, setDataFetched] = useState(false);

  // Getting the account details if user is logged in
  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        console.log(response);
        setUserName(response.name);
        setCurrentUserID(response.$id)
      },
      function (error) {
        console.error(error);
      }
    );
  }, [userName]);

  // const fetchData = () => {
  //   const listUserDocsProm = databases.listDocuments(
  //     "669355b80023d49b2370",
  //     "669355fa000f8996c0ca"
  //   );
  //   listUserDocsProm.then(
  //     function (response) {
  //       console.log(response.documents);

  //       const currentUser = response.documents.filter(
  //         (user) => userName === user.userName
  //       );
  //       // setCurrentUserID(currentUser[0].$id);
  //       console.log(currentUser[0].$id);
  //       const resultProm = databases.getDocument(
  //         "669355b80023d49b2370",
  //         "669355fa000f8996c0ca",
  //         currentUser[0].$id
  //       );
  //       resultProm.then(
  //         function (response) {
  //           // setDataFetched(true);
  //           console.log(response);
  //           setUserPhone(response.phoneNumber);
  //           setDaysAvailable(response.daysAvailable);
  //           setUserLocation(response.userLocation);
  //         },
  //         function (err) {
  //           console.log(err);
  //         }
  //       );
  //     },
  //     function (error) {
  //       console.error(error);
  //     }
  //   );
  // };

  return (
    <ContextStore.Provider
      value={{
        userName,
        setUserName,
        userPhone,
        setUserPhone,
        daysAvailable,
        setDaysAvailable,
        timeAvailable,
        setTimeAvailable,
        userLocation,
        setUserLocation,
        // fetchData,
        currentUserID,
        setCurrentUserID,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export { ThemeProvider, ContextStore };
