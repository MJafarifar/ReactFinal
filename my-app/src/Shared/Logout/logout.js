import React from 'react';
import { Redirect } from 'react-router-dom'

export default function  logout() {
    sessionStorage.removeItem('token');
    
    window.location = '/';
}
