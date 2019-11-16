import React, { useContext, useState, useEffect } from 'react'
import { Dialog, DialogTitle, Grid, Divider, Button } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { RoomContext } from '../../RoomContext'

function SwitchPropertiesMenu() {

    const { __switchPropertiesMenu, __rooms } = useContext(RoomContext)

    const [switchPropertiesMenu, setSwitchPropertiesMenu] = __switchPropertiesMenu
    const [rooms, setRooms] = __rooms

    const { open, __switch } = switchPropertiesMenu

    if (!__switch) {
        return null
    }

    const { way, pole, dimmer, illuminated, type } = __switch.props
    //console.log(__switch.props)

    const roomIndex = rooms.findIndex(room => room.id === __switch.id.split('.')[0])
    const room = rooms.find(({ id }) => id === __switch.id.split('.')[0])
    const switchIndex = room.switches.findIndex(el => el.id === __switch.id)
    const this__switch = room.switches.find(({ id }) => id === __switch.id)

    const handleClose = () => {
        setSwitchPropertiesMenu(prev => { return { ...prev, open: false } })
    }

    const handleType = (e, value) => {
        rooms[roomIndex].switches[switchIndex].props.type = value
        setRooms([...rooms])
    }

    const handleWay = (e, value) => {

        rooms[roomIndex].switches[switchIndex].props.way = value
        setRooms([...rooms])
    }

    const handlePole = (e, value) => {

        rooms[roomIndex].switches[switchIndex].props.pole = value
        setRooms([...rooms])
    }

    const handleDimmer = (e, value) => {

        rooms[roomIndex].switches[switchIndex].props.dimmer = !value
        setRooms([...rooms])
    }
    const handleIlluminated = (e, value) => {

        rooms[roomIndex].switches[switchIndex].props.illuminated = !value
        setRooms([...rooms])
    }


    return (
        <Dialog aria-labelledby="simple-dialog-title" open={open} onClose={handleClose}>
            <DialogTitle id="simple-dialog-title">Set switch properties</DialogTitle>

            <Grid container direction='column' spacing={1}>
                <Grid item>
                    <Grid
                        container
                        direction='column'
                    >
                        <Grid item xs={12}>
                            <ToggleButtonGroup
                                exclusive
                                aria-label="text alignment"
                                value={type}
                                onChange={handleType}

                            >
                                <ToggleButton value={'switch'} selected={type === 'switch'}>Switch</ToggleButton>
                                <ToggleButton value={'push'} selected={type === 'push'}>Push</ToggleButton>
                                <ToggleButton value={'inverter'} selected={type === 'inverter'}>Inverter</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <ToggleButtonGroup
                                exclusive
                                aria-label="text alignment"
                                value={way}
                                onChange={handleWay}

                            >
                                <ToggleButton
                                    value={1}
                                    selected={way === 1 && type === 'switch'}
                                    disabled={type !== 'switch'}

                                >
                                    Single throw
                                </ToggleButton>

                                <ToggleButton
                                    value={2}
                                    selected={way === 2 && type === 'switch'}
                                    disabled={type !== 'switch'}
                                >
                                    Double throw
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <ToggleButtonGroup
                                exclusive
                                aria-label="text alignment"
                                value={pole}
                                onChange={handlePole}
                            >
                                <ToggleButton
                                    value={1}
                                    selected={pole === 1 && type === 'switch'}
                                    disabled={type !== 'switch'}

                                >
                                    Single Pole
                                </ToggleButton>

                                <ToggleButton
                                    value={2}
                                    selected={pole === 2 && type === 'switch'}
                                    disabled={type !== 'switch'}

                                >
                                    Double Pole
                                </ToggleButton>

                            </ToggleButtonGroup>
                        </Grid>
                        <Grid item>
                            <ToggleButton
                                value={dimmer}
                                selected={dimmer}
                                onChange={handleDimmer}
                            >
                                Dimmer
                            </ToggleButton>
                        </Grid>
                        <Grid item>
                            <ToggleButton
                                value={illuminated}
                                selected={illuminated}
                                onChange={handleIlluminated}
                            >
                                Illuminated
                            </ToggleButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify="center" spacing={0}>

                        <Grid item xs={6} style={{ textAlign: "center" }} >

                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "center" }} >

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button onClick={() => setSwitchPropertiesMenu({ open: false })} variant="contained" color="primary" fullWidth>
                        Save
                    </Button>
                </Grid>
            </Grid>

        </Dialog>
    )
}

export default SwitchPropertiesMenu
