import {
	Dialog,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
} from '@material-ui/core'
import React, {useEffect} from 'react'
import {deleteUser} from '../Service/Link'

const Dialogue = ({open, closeClickHandler}) => {
	useEffect(() => {
		getAllUsers()
	}, [])

	const deleteFunction = async (id) => {
		await deleteUser(id)
		getAllUsers()
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
					<Button onClick={deleteFunction}>Yes</Button>
					<Button>No</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default Dialogue
