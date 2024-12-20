

export const registerUser = (data) => {
    return fetch(import.meta.env.VITE_BASE_URL+'/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}


export const loginUser = (data) => {
    return fetch(import.meta.env.VITE_BASE_URL+'/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const sendAuthToken = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    return fetch(import.meta.env.VITE_BASE_URL+'/checkauth', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
}

export const fetchChartData = async (age,gender,dateRange) => {
    let sendData={age,gender,dateRange}
    let data = await fetch(process.env.VITE_BASE_URL+'/getchartdata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
    })
}