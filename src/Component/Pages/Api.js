import React from 'react'
import { useState } from 'react';

const Api = (e) => {

    const [instance,setInstance]=useState()
    console.log('instance',instance)
 e.preventDefault();
    instance.post('/api/auth/login',{
        "refreshToken": "059c420e-7424-431f-b23b-af0ecabfe7b8",
        "teamId": "a001994b-918b-4939-8518-3377732e4e88"
    }).then(res => {
        instance.get('/api/me').then((response) => {
            console.log(response);
        }
        )
     
    })

  return (
    <div>
    
    </div>
  )
}

export default Api