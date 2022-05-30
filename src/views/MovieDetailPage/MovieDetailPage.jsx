import { useParams, Route, Routers, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, lazy, Suspense, useRef } from 'react';

import { fetchMovieById } from "../../services/movies-api";
import { MovieCard } from "../../components/MovieCard";
import { CastRevievMenu } from "../../components/CastRevievMenu";
