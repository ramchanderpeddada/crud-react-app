import {Dialog, DialogContent, DialogContentText} from '@material-ui/core'
import React, {useState} from 'react'

const Dialogue = () => {
	const [open, setOpen] = useState(false)
	const openClickHandler = () => {
		setOpen(true)
	}
	const closeClickHandler = () => {
		setOpen(false)
	}
	return (
		<div>
			<Dialog open={open} onClose={closeClickHandler}>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Are you sure you want to delete?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Yes</Button>
					<Button onClick={handleClose}>No</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default Dialogue
