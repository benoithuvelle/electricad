import React, { useContext, useState, useEffect } from 'react'
import { Dialog, DialogTitle, Grid, Divider, Button } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { RoomContext } from '../../RoomContext'

function OutletPropertiesMenu() {

    const { __outletPropertiesMenu, __rooms } = useContext(RoomContext)

    const [outletPropertiesMenu, setOutletPropertiesMenu] = __outletPropertiesMenu
    const [rooms, setRooms] = __rooms

    const { open, outlet } = outletPropertiesMenu

    if (!outlet) {
        return null
    }

    const roomIndex = rooms.findIndex(room => room.id === outlet.id.split('.')[0])
    const room = rooms.find(({ id }) => id === outlet.id.split('.')[0])
    const outletIndex = room.outlets.findIndex( el => el.id === outlet.id )
    const thisOutlet = room.outlets.find(({ id }) => id === outlet.id)

    const { grounding, shutter, type } = thisOutlet.props

    const handleClose = () => {
        setOutletPropertiesMenu(prev => { return { ...prev, open: false } })
    }

    const handleGrounding = (e, value) => {
        console.log(e)

        rooms[roomIndex].outlets[outletIndex].props.grounding = !value

        setRooms([...rooms])
        console.log(rooms)
    }

    const handleShutter = (e, value) => {
        console.log(e)

        rooms[roomIndex].outlets[outletIndex].props.shutter = !value

        setRooms([...rooms])
    }

    const handleType = (e, value) => {
        rooms[roomIndex].outlets[outletIndex].props.type = value
        setRooms([...rooms])
    }


    return (
        <Dialog aria-labelledby="simple-dialog-title" open={open} onClose={handleClose}>
            <DialogTitle id="simple-dialog-title">Set outlet properties</DialogTitle>

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
                                <ToggleButton value={1} selected={type === 1}>ONE</ToggleButton>
                                <ToggleButton value={2} selected={type === 2}>TWO</ToggleButton>
                                <ToggleButton value={3} selected={type === 3}>THREE</ToggleButton>
                                <ToggleButton value={4} selected={type === 4}>FOOR</ToggleButton>
                                <ToggleButton value={5} selected={type === 5}>FIVE</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify="center" spacing={0}>

                        <Grid item xs={6} style={{ textAlign: "center" }} >
                            <ToggleButton
                                value={grounding}
                                selected={grounding}
                                onChange={(e, value) => handleGrounding(e, value)}
                            >
                                Grounding
                            </ToggleButton>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "center" }} >
                            <ToggleButton
                                value={shutter}
                                selected={shutter}
                            onChange={handleShutter}
                            >
                                Shutter</ToggleButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button onClick={() => setOutletPropertiesMenu({ open: false })} variant="contained" color="primary" fullWidth>
                        Save
                    </Button>
                </Grid>
            </Grid>

        </Dialog>
    )
}

export default OutletPropertiesMenu
