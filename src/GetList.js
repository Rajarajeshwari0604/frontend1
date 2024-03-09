import React,  { useState } from 'react';
import { useEffect } from 'react';

import { useNavigate} from "react-router-dom";
import Get from './Get';
import { API } from './global';


export default function GetList() {

    const navigate = useNavigate()

    const [getAll, setGetAll] = useState([])
 
    const getData = () => {
      fetch(`${API}/get`)
        .then((data) => data.json())
        .then((mvs) => setGetAll(mvs));
    }
 
 
    useEffect(() => {
      getData()
    }, [])
}
