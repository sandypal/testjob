import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Contact = () => {
const [user,setuser]=useState()

const getData=()=>{
  const options = {
    method: 'POST',
    url: 'https://api-teams.chatdaddy.tech/token',
    params:{
      returnTotalCount: 'true',
    returnLastMessage: 'true',
    page: '"3"',
    count: '50',
    notTags: 'h1',
    notContacts: '[56]',
    minMessagesSent: '6',
    minMessagesRecv: '1',
    maxMessagesSent: '5',
    maxMessagesRecv: '5',
    q: 'null',
    accountId: 'acc_1234567c-123b-123a-ab_0000',
    type: 'individual'
    },
    headers: {'Content-Type': 'application/json'},
    data: {phoneNumber: 9122321223, password: 'abcd', scopes: ['WA_LIVE_EVENTS']}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  // const accessToken = "059c420e-7424-431f-b23b-af0ecabfe7b8";
  // const options = {
  //   method: 'GET',
  //   url: 'https://api-im.chatdaddy.tech/contacts',
  //   headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken,}
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  // const responce=  await axios.get('https://api-im.chatdaddy.tech/contacts.')
  // console.log('responce',responce)
  // console.log('res',responce.data)
  // setuser(responce.data)
}

useEffect(()=>{
    getData()
})
  return (
    <div>
  
    </div>
  )
}

export default Contact