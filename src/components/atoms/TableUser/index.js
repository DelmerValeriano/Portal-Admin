import React, { useEffect, useState } from 'react'
import MaterialTable from "material-table";
import { useStyles } from "./styles";
import { getUsers } from "../../hooks";
import { DialogActionTitle, DialogDeleteGroup } from "../../organisms";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
const Table = () => {
    const classes = useStyles();
    const [user, setUser] = useState([]);
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [create, setCreate] = useState(false);
    const [removed, setRemoved] = useState(false);
    const [idUser, setIdUser] = useState(null);
    const [error, setError] = useState(null);

    const getUserData = async () => {
        try {
            const response = await getUsers();
            setUser(response.data);
        } catch (error) {
            const { success } = error;
            if (!success) {
                setError('Error al cargar los usuarios');
            } else {
                setError('Error del servidor');
            }
        }
    };

    useEffect(() => {
        getUserData();
    }, [create, removed]);

    const viewEditUser = (id) => {
        setIdUser(id);
        setOpen(true);
    }

    const deleteConfirmation = (id) => {
        setIdUser(id);
        setOpenDelete(true);
        setRemoved(true);
    }

    const createOpenUser = () => {
        setIdUser("");
        setOpen(true);
        setCreate(true);
    }

    const columns = [
        {
            field: 'id', title: 'Id', cellStyle: {
                width: 40,
                minWidth: 10
            },
            headerStyle: {
                width: 60,
                minWidth: 60,
            }
        },
        { field: 'name', title: 'Nombre', width: '1%', },
        {
            field: 'email', title: 'Email', cellStyle: {
                width: 30,
                minWidth: 30,
            },
            headerStyle: {
                width: 30,
                minWidth: 40,
            }
        },
        { field: 'createBy', title: 'Creado por', },
        { field: 'creationDate', title: 'Fecha Creación', },
        { field: 'modifiedBy', title: 'Modificado por', },
        { field: 'modificationDate', title: 'Fecha Modificación' },
    ];

    const data = user.map((item, i = 1) => ({
        id: i + 1,
        idUser: item.id,
        name: item.name,
        email: item.email,
        createBy: item.createBy,
        creationDate: item.creationDate,
        modifiedBy: item.modifiedBy,
        modificationDate: item.modificationDate,
    }
    ));

    return (
        <div className={classes.div}>
            <MaterialTable
                title="Datos de usuarios"
                columns={columns}
                data={data}
                actions={[
                    {
                        icon: () => <EditOutlinedIcon color="primary" />,
                        Tooltip: 'Edit User',
                        onClick: (e, rowData) => viewEditUser(rowData.idUser)
                    },
                    {
                        icon: () => <DeleteIcon color="secondary" />,
                        Tooltip: 'Delete User',
                        onClick: (e, rowData) => deleteConfirmation(rowData.idUser)
                    },
                    {
                        icon: () => <Button
                            color="primary"
                            variant="contained"
                            style={{ textTransform: 'none' }}
                            size="small"
                        >
                            Crear Usuario
                        </Button>,
                        isFreeAction: true,
                        onClick: () => createOpenUser()
                    }
                ]}
                options={{
                    actionsColumnIndex: -1,
                }}
                localization={{
                    header: {
                        actions: "Acciones"
                    },
                    toolbar: {
                        searchPlaceholder: 'Busqueda'
                    },
                    body: {
                        emptyDataSourceMessage: { data } ? 'Cargando usuarios..' : 'No hay usuarios registrados'
                    },
                    pagination: {
                        labelRowsSelect: 'Filas',
                        firstTooltip: 'Ir a la primer pagina',
                        previousTooltip: 'Anterior',
                        nextTooltip: 'Siguiente',
                        lastTooltip: 'Ir a la última pagina',
                    }
                }
                }
            />
            {
                open ? <DialogActionTitle open={open} setOpen={setOpen} idUser={idUser} getUserData={getUserData} create={create} setCreate={setCreate} setError={setError} error={error} /> : null
            }
            {
                openDelete ? <DialogDeleteGroup idUser={idUser} openDelete={openDelete} setOpenDelete={setOpenDelete} removed={removed} setRemoved={setRemoved} setUser={setUser} setError={setError} /> : null
            }
        </div>
    )
}

export default Table