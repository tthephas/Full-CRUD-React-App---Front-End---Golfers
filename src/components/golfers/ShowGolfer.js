import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { Container, Card, Button } from 'react-bootstrap'

import { getOneGolfer } from "../../api/golfers";

import messages from "../shared/AutoDismissAlert/messages";

import LoadingScreen from "../shared/LoadingScreen";



export default ShowGolfer