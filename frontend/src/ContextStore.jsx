import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { account, databases } from "../Appwrite";

const ContextStore = createContext();

const ThemeProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState(null);
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
        setCurrentUserID(response.$id);

        // Fetching Acc docs
        const listUserDocsProm = databases.getDocument(
          "669355b80023d49b2370",
          "669355fa000f8996c0ca",
          response.$id
        );
        listUserDocsProm.then(
          function (response) {
            console.log(response);
            setUserPhone(response.phoneNumber);
            setUserLocation(response.userLocation);
          },
          function (error) {
            console.error(error);
          }
        );
      },
      function (error) {
        console.error(error);
      }
    );
  }, [userName]);

  // const fetchData = () => {

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
