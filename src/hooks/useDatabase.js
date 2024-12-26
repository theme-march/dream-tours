import { useEffect, useState } from "react";

const useDatabase = () => {
  const [servicesAll, setServicesAll] = useState([]);
  const [booktourslist, setBooktourslist] = useState([]);
  const [dataLoadTime, setDataLoadTime] = useState(true);
  const [getDatacallagin, setgetDatacallagin] = useState(false);
  useEffect(() => {
    //http://localhost:5000/ changing url

    fetch(`http://localhost:5000/showallservices`)
      .then((res) => res.json())
      .then((data) => {
        setServicesAll(data);
      })
      .finally(() => {
        setDataLoadTime(false);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/booktourslist`)
      .then((res) => res.json())
      .then((data) => {
        setBooktourslist(data);
      })
      .finally(() => {
        setDataLoadTime(false);
      });
  }, [getDatacallagin]);

  // admin and user service delete
  const deletebooktoursrlist = (id) => {
    fetch(`http://localhost:5000/delettable/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const updateTable = booktourslist.filter(
          (booktours) => booktours._id !== id
        );
        setBooktourslist(updateTable);
      })
      .finally(() => {
        setDataLoadTime(false);
      });
  };

  const udatebooktoursrlist = (id) => {
    setgetDatacallagin(false);
    const updateStatus = { status: "update" };
    fetch(`http://localhost:5000/statusupdate/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setgetDatacallagin(true);
        }
      });
  };

  return {
    servicesAll,
    setServicesAll,
    dataLoadTime,
    booktourslist,
    setBooktourslist,
    deletebooktoursrlist,
    udatebooktoursrlist,
  };
};

export default useDatabase;
