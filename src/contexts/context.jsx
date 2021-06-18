import React, { useState, useCallback, createContext, useEffect } from "react";

import api from "../config/http";

export const Context = createContext();

const Contexts = ({ children }) => {
  const [dataCast, setDataCast] = useState([]);
  const [dataSynopsis, setDataSynopsis] = useState("");
  const [dataBackground, setDataBackground] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataEpsodes, setDataEpsodes] = useState([]);

  const getData = useCallback(() => {
    api
      .get("episodes/SHOW123.json")
      .then((response) => {
        let epsodes = response.data.filter((items) => items !== null);

        setDataEpsodes((dataEpsodes) => [...epsodes, dataEpsodes]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [setDataEpsodes]);

  useEffect(() => {
    getData();
  }, [getData]);

  const getDataTVShow = useCallback(() => {
    api
      .get("tv-shows/SHOW123.json")
      .then((response) => {
        let cast = response.data.Cast;
        let about = response.data.Synopsis;
        let img = response.data.Images.Background;
        let title = response.data.Title;

        setDataCast((d) => [...cast, d]);
        setDataSynopsis(about);
        setDataBackground(img);
        setDataTitle(title);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [setDataCast]);

  useEffect(() => {
    getDataTVShow();
  }, [getDataTVShow]);

  return (
    <Context.Provider value={{ dataCast, dataSynopsis, dataBackground, dataEpsodes, dataTitle}}>
      {children}
    </Context.Provider>
  );
};

export default Contexts;
