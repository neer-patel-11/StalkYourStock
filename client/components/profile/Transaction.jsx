import React from 'react'

const Transaction = () => {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    axios.get('http://localhost:8080/user/profile?email=' + localStorage.getItem('email')).then((response) => {
      console.log(response.data.userData)
      setUserData(response.data.userData)
    })
  }, [])
  return <div>Transaction</div>
}

export default Transaction
