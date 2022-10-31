import { observer } from "mobx-react-lite";
import paymentHistory from "store/paymentHistory/";
import {
  Button,
  Dialog,
  IconButton,
  List as UIList,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { IPayment } from "store/paymentHistory/types";
import styles from "./index.module.css";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useState } from "react";

export const List = observer(() => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (payment) => {
    paymentHistory.add(payment as IPayment);
    setOpen(false);
  };

  return (
    <>
      <UIList>
        {paymentHistory.paymentHistory.map((payment: IPayment) => (
          <ListItem className={styles.root} key={payment.id}>
            <Typography variant="body1">{payment.date}</Typography>
            <Typography variant="body1">{payment.amount}</Typography>
            <Typography variant="body1">{payment.description}</Typography>
            <Typography variant="body1">{payment.category}</Typography>
            <IconButton onClick={() => paymentHistory.remove(payment.id)}>
              X
            </IconButton>
          </ListItem>
        ))}
      </UIList>
      <Button onClick={() => setOpen(true)}>Add payment</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={styles.input}
            label="Date"
            {...register("date")}
          />
          <TextField
            className={styles.input}
            label="Amount"
            {...register("amount")}
          />
          <TextField
            className={styles.input}
            label="Description"
            {...register("description")}
          />
          <TextField
            className={styles.input}
            label="Category"
            {...register("category")}
          />
          <Button variant="outlined" type="submit">
            Add
          </Button>
        </form>
      </Dialog>
    </>
  );
});
