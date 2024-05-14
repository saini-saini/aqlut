import "./style.scss"
import EditMenu from './editMenu'
import CreateMenu from './createMenu'
import ViewItem from "./viewDetails"
import info from "../../../images/info.png"
import Grid from '@mui/material/Unstable_Grid2';
import React, { useEffect, useState } from 'react'
import { FormControlLabel, Switch, styled } from '@mui/material'
import { getAllMenuAPI } from "../../../service/Collection"
import { updateMenuStatusAPI } from "../../../service/Collection"
import Loader from "../../loader/loader"
import { eventEmitter } from "../../../utils/eventEmitter"
import { deleteMenuAPI } from "../../../service/Collection"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  margin: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const Menus = () => {
  const [createMenuOpen, setCreateMenuOpen] = useState(false);
  const [editMenuOpen, setEditMenuOpen] = useState(false);
  const [viewSectionOpen, setViewSectionOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const openCreateMenuDialog = () => {
    setCreateMenuOpen(true);
  };

  const closeCreateMenuDialog = () => {
    setCreateMenuOpen(false);
  };

  const openEditMenuDialog = (menuItem) => {
    setEditMenuOpen(true);
    setSelectedMenuItem(menuItem);
  };

  const closeEditMenuDialog = () => {
    setEditMenuOpen(false);
  };

  const openViewSectionDialog = (menuItem) => {
    setViewSectionOpen(true);
    setSelectedMenuItem(menuItem);
  };

  const closeViewSectionDialog = () => {
    setViewSectionOpen(false);
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      setLoading(true);
      await updateMenuStatusAPI( {
        id: id,
        status: status
       });
      //  toast.success("Status updated successfully")
      eventEmitter.dispatch('menuStatusUpdated');
    } catch (error) {
      console.error("Error updating status:", error);
    //   toast.error("Something went wrong", {
    //     theme: "colored",
    // })
    }
    finally {
      setLoading(false);
    }
  }

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteMenuAPI(id);
      console.log("Menu deleted successfully!");
      // toast.success("Menu deleted successfully")
      eventEmitter.dispatch('menuDeleted');
    } catch (error) {
      console.error("Error deleting menu:", error);
      // toast.error("Something went wrong", {
      //   theme: "colored",
      // });
    } finally {
      setLoading(false);
    }
  }
  

  const getMenuDetails = async () => {
    setLoading(true)
    let res = await getAllMenuAPI();
    setMenuItems(res.data)
    setLoading(false)
  }


  useEffect(() => {
    getMenuDetails();
    const unsubscribe = eventEmitter.subscribe('menuCreated', () => {
      getMenuDetails();
    });
    const unsubscribeMenuUpdated = eventEmitter.subscribe('menuUpdated', () => {
      getMenuDetails();
    });
    const unsubscribeDelete = eventEmitter.subscribe('menuDeleted', () => {
      getMenuDetails();
    });
    const unsubscribeStatus = eventEmitter.subscribe('menuStatusUpdated', () => {
      getMenuDetails();
    });
    return () => {
      unsubscribe();
      unsubscribeMenuUpdated();
      unsubscribeDelete();
      unsubscribeStatus();
    };
  }, []);

  console.log(menuItems,"menuItems")
  return (
    <div className='menus'>
      {loading && (
        <Loader />
      )}
      {!loading && (
        <div>
          <div className='menus__topWrapper'>
            <p className='menus__title'>Menus</p>
            <button className='menus__createButton' onClick={openCreateMenuDialog}>CREATE</button>
          </div>
          <Grid container className='menus__allCardsWrapper' spacing={4} >
            {menuItems?.map((menuItem) => (
              <Grid key={menuItem._id} item xs={12} sm={6} md={3} lg={4} xl={2.4} >
                <div className='menus__cardWrapper'>
                  <div className='menus__imgWrapper'  >
                    <img src={menuItem?.imageUrl} alt="" className='menus__img' />
                  </div>
                  <div className='menus__cardContent'>
                    <div className='menus__cardHeading'>
                      <p className='menus__cardTitle'>{menuItem?.name}</p>
                      <div>
                        <FormControlLabel
                          control={
                            <IOSSwitch
                              sx={{ m: 1 }}
                              defaultChecked={menuItem?.status}
                              onClick={() => handleStatusUpdate(menuItem._id, !menuItem.status)}
                            />
                          }
                          className='profile__switch'
                        />


                      </div>
                    </div>
                    <div className='menus__cardDescriptionWrapper'>
                      <p className='menus__cardDescription'>
                        {menuItem?.description}
                      </p>
                    </div>
                  </div>
                  <div className='menus__cardAction'>
                    <button className='menus__deleteButton' onClick={() => handleDelete(menuItem._id)}>Delete</button>
                    <button className='menus__editButton' onClick={() => openEditMenuDialog(menuItem)}>Edit</button>
                  </div>
                  <div className='menus__info'>
                    <img src={info} alt="info" onClick={() => openViewSectionDialog(menuItem)} />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
          {createMenuOpen && <CreateMenu open={createMenuOpen} setOpen={setCreateMenuOpen} onClose={closeCreateMenuDialog} />}
          {editMenuOpen && <EditMenu open={editMenuOpen} setOpen={setEditMenuOpen} onClose={closeEditMenuDialog} selectedMenuItem={selectedMenuItem} />}
          {viewSectionOpen && <ViewItem open={viewSectionOpen} setOpen={setViewSectionOpen} onClose={closeViewSectionDialog} selectedMenuItem={selectedMenuItem}/>}
        </div>
      )}
    </div>
  )
}

export default Menus
