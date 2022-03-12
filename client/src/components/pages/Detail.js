import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import {useQuery} from '@apollo/client';

import Card from 'client/src/components/pages/Cart.js';
import {useStoreContext} from 'client/src/GlobalState.js';
import {REMOVE_FROM_CART, UPDATE_CARD_QUANTITY, ADD_TO_CART, UPDATE_PRODUCTS,} from "client/src/utils/actions";
import {QUERY_PRODUCTS} from '../utils/queries';
