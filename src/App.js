import React, {useEffect} from "react";
import './App.scss';
import { useAppContext } from "./AppContext";
import { Details, Sidebar } from "./components";
import AppService from "./services/AppService";

export const App = () => {
  const {setTitles, setVariables} = useAppContext();
  useEffect(() => {
    AppService.getTitles(setTitles);
    AppService.getVariables(setVariables);
  }, [setTitles, setVariables]);
  return (
	<div className="app">
		<Sidebar />
		<Details />
	</div>
  )
};
