import firebase from "../../../firebase";
require('dotenv').config();

export const getUsers = async () => {
    const idToken = await firebase.auth.currentUser.getIdToken(true);
    const response = {
        success: true,
        message: '',
        data: []
    };
    try {
        const resp = await fetch(process.env.REACT_APP_apiUrl + 'getUsers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idToken }),
        });
        const respJSON = await resp.json();
        response.success = respJSON.success;
        if (!respJSON.success) {
            response.message = respJSON.message;
        } else {
            response.data = respJSON.users;
        }
    } catch (error) {
        response.success = false
        response.message = 'Ocurrio un error al obtener los usuarios.';
    }
    return response;
}

export const deletUser = async (idUser) => {
    const idToken = await firebase.auth.currentUser.getIdToken(true);
    const response = {
        success: true,
        message: '',
        data: []
    };
    try {
        const resp = await fetch(process.env.REACT_APP_apiUrl + 'deletUser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: idUser, idToken }),
        });
        const respJSON = await resp.json();

        response.success = respJSON.success;
        if (!respJSON.success) {
            response.message = respJSON.message;
        } else {
            response.data = respJSON.user;
        }
    } catch (error) {
        response.success = false
        response.message = 'Ocurrio un error al eliminar el usuario.';
    }
    return response;
}

export const getUserId = async (idUser) => {
    const idToken = await firebase.auth.currentUser.getIdToken(true);
    const response = {
        success: true,
        message: '',
        data: {}
    };
    try {
        const resp = await fetch(process.env.REACT_APP_apiUrl + 'getUserId', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: idUser, idToken }),
        });

        const respJSON = await resp.json();
        response.success = respJSON.success;
        if (!respJSON.success) {
            response.message = respJSON.message;
        } else {
            response.data = respJSON.user;
        }
    } catch (error) {
        response.success = false
        response.message = 'Ocurrio un error al obtener los usuarios.';
    }
    return response;
}

export const updateUser = async (idUser, name, email, emailCreator) => {
    const idToken = await firebase.auth.currentUser.getIdToken(true);
    const response = {
        success: true,
        message: '',
        data: {}
    };
    try {
        const resp = await fetch(process.env.REACT_APP_apiUrl + 'updateUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: idUser,
                name,
                email,
                emailCreator,
                idToken
            })
        });
        const respJSON = await resp.json();
        response.success = respJSON.success;
        if (!respJSON.success) {
            response.message = respJSON.message;
        } else {
            response.data = respJSON;
        }
    } catch (error) {
        response.success = false
        response.message = 'Ocurrio un error al obtener los usuarios.';
    }
    return response;
}

export const createUser = async (name, email, emailCreator) => {
    const idToken = await firebase.auth.currentUser.getIdToken(true);
    const response = {
        success: true,
        message: '',
        data: {}
    };
    try {
        const resp = await fetch(process.env.REACT_APP_apiUrl + 'createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                emailCreator,
                idToken
            }),
        });
        const respJSON = await resp.json();

        response.success = respJSON.success;
        if (!respJSON.success) {
            response.message = respJSON.message;
        } else {
            response.data = respJSON;
        }
    } catch (error) {
        response.success = false
        response.message = 'Ocurrio un error al crear el usuario.';
    }
    return response;
}