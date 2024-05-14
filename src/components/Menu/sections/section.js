import "./section.scss"
import ViewItem from './view';
import info from "../../../images/info.png";
import CreateSection from './createSection';
import Grid from '@mui/material/Unstable_Grid2';
import cardImg from "../../../images/image 1.png"
import { Select } from 'antd';
import React, { useEffect, useState } from 'react'
import { FormControlLabel, Switch, styled } from '@mui/material'
import { getAllMenuAPI, sectionListingAPI } from "../../../service/Collection";
import Loader from "../../loader/loader";
import { eventEmitter } from "../../../utils/eventEmitter";
import EditSection from "./editSection";
import { sectionDeleteAPI, sectionUpdateStatusAPI } from "../../../service/Collection";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import noData from "../../../images/noData.jpg"

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

const Section = () => {

  const [createSectionOpen, setCreateSectionOpen] = useState(false);
  const [viewSectionOpen, setViewSectionOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sections, setSection] = useState([]);
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [selectedSecttion, setSelectedSecttion] = useState(null);
  const [editSectionOpen, setEditSectionOpen] = useState(false);

  const openCreateSectionDialog = () => {
    setCreateSectionOpen(true);
  };

  const closeCreateSectionDialog = () => {
    setCreateSectionOpen(false);
  };

  const openEditSectionDialog = (item) => {
    setEditSectionOpen(true);
    setSelectedSecttion(item);
  };

  const closeEditSectionDialog = () => {
    setEditSectionOpen(false);
  };


  const openViewSectionDialog = (item) => {
    setViewSectionOpen(true);
    setSelectedSecttion(item);
  };

  const closeViewSectionDialog = () => {
    setViewSectionOpen(false);
  };

  const handleChange = (value) => {
    setSelectedMenuId(value);
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await sectionUpdateStatusAPI({
        id: id,
        status: status
      });
      //  toast.success("Status updated successfully")
      eventEmitter.dispatch('sectionStatusUpdated');
    } catch (error) {
      console.error("Error updating status:", error);
      // toast.error("Something went wrong", {
      //   theme: "colored",
      // })
    }
  }

  const handleDelete = async (id) => {
    try {
      await sectionDeleteAPI(id);
      console.log("Section deleted successfully!");
      // toast.success("Section deleted successfully")
      eventEmitter.dispatch('sectionDeleted');
    } catch (error) {
      console.error("Error deleting menu:", error);
      // toast.error("Something went wrong", {
      //   theme: "colored",
      // })
    }
  }

  const getMenuDetails = async () => {
    setLoading(true)
    let res = await getAllMenuAPI();
    let sectionListing = await sectionListingAPI();
    setMenuItems(res.data)
    setSection(sectionListing.data)
    setLoading(false)
  }
  
  useEffect(() => {
    getMenuDetails();
    const unsubscribe = eventEmitter.subscribe('sectionCreated', () => {
      getMenuDetails();
    });
    const unsubscribeDelete = eventEmitter.subscribe('sectionDeleted', () => {
      getMenuDetails();
    });
    const unsubscribeStatus = eventEmitter.subscribe('sectionStatusUpdated', () => {
      getMenuDetails();
    });
    const unsubscribeEdit = eventEmitter.subscribe('sectionUpdated', () => {
      getMenuDetails();
    });
    return () => {
      unsubscribe();
      unsubscribeDelete();
      unsubscribeStatus();
      unsubscribeEdit();
    };
  }, []);

  const filteredSections = selectedMenuId
    ? sections.filter((section) => section?.menuId === selectedMenuId)
    : sections;

  return (
    <div className='section'>
      {loading && (
        <Loader />
      )}
      {!loading && (
        <div>
          <div className='section__topWrapper'>
            <p className='section__title'>Dessert Sections</p>
            <button className='section__createButton' onClick={openCreateSectionDialog}>CREATE</button>
          </div>

          <div className='section__bottomWrapper'>
            <Select
              onChange={handleChange}
              defaultValue={null}
              className="section__customSelect"
              options={[
                { value: null, label: "All" },
                ...(menuItems ? menuItems.map(item => ({
                  value: item?._id,
                  label: item?.name,
                })) : [])
              ]}
            />

            <Grid container className='section__allCardsWrapper' spacing={4} >
              {filteredSections?.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={item?._id}>
                  <div className='section__cardWrapper'>
                    <div className='section__imgWrapper'>
                      <img src={item?.imageUrl} alt="" className='section__img' />
                    </div>
                    <div className='section__cardContent'>
                      <div className='section__cardHeading'>
                        <p className='section__cardTitle'>{item?.name}</p>
                        <div>
                          <FormControlLabel
                            control={
                              <IOSSwitch
                                sx={{ m: 1 }}
                                defaultChecked={item?.status}
                                onClick={() => handleStatusUpdate(item._id, !item.status)}
                              />
                            }
                            className='profile__switch'
                          />
                        </div>
                      </div>
                      <div className='section__cardDescriptionWrapper'>
                        <p className='section__cardDescription'>
                          {item?.description}
                        </p>
                      </div>
                    </div>
                    <div className='section__cardAction'>
                      <button className='section__deleteButton' onClick={() => handleDelete(item._id)}>Delete</button>
                      <button className='section__editButton' onClick={() => openEditSectionDialog(item)}>Edit</button>
                    </div>
                    <div className='menus__info'>
                      <img src={info} alt="info" onClick={() => openViewSectionDialog(item)} />
                    </div>
                  </div>
                </Grid>
              ))
              }
            </Grid>
            {createSectionOpen && <CreateSection open={createSectionOpen} setOpen={setCreateSectionOpen} onClose={closeCreateSectionDialog} />}
            {editSectionOpen && <EditSection open={editSectionOpen} setOpen={setEditSectionOpen} onClose={closeEditSectionDialog} selectedSecttion={selectedSecttion} />}
            {viewSectionOpen && <ViewItem open={viewSectionOpen} setOpen={setViewSectionOpen} onClose={closeViewSectionDialog} selectedSecttion={selectedSecttion} />}

          </div>
        </div>
      )}
    </div>
  )
}

export default Section
