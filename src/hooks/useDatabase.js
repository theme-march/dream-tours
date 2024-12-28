import { useEffect, useState } from "react";

const useDatabase = () => {
  const [servicesAll, setServicesAll] = useState([]);
  const [booktourslist, setBooktourslist] = useState([]);
  const [dataLoadTime, setDataLoadTime] = useState(true);
  const [getDatacallagin, setgetDatacallagin] = useState(false);
  useEffect(() => {
    //https://dream-api-topaz.vercel.app/ changing url
    // https://dream-api-topaz.vercel.app/showallservices

    fetch(`https://dream-api-topaz.vercel.app/showallservices`)
      .then((res) => res.json())
      .then((data) => {
        setServicesAll(data);
      })
      .finally(() => {
        setDataLoadTime(false);
      });
  }, []);

  useEffect(() => {
    fetch(`https://dream-api-topaz.vercel.app/booktourslist`)
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
    fetch(`https://dream-api-topaz.vercel.app/delettable/${id}`, {
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
    fetch(`https://dream-api-topaz.vercel.app/statusupdate/${id}`, {
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
