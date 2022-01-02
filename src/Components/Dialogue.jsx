import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { deleteUser, getUser } from "../Service/Link";

const Dialogue = ({ open, closeClickHandler, setUsers }) => {
  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteFunction = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  const getAllUsers = async () => {
    const response = await getUser();
    setUsers(response.data);
  };

  return (
    <div>
      <Dialog open={open} onClose={closeClickHandler}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteFunction} color="primary" variant="contained">
            Yes
          </Button>
          <Button color="secondary" variant="contained">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dialogue;
