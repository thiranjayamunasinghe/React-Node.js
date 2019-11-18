import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { height } from "@material-ui/system";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "25px",
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  topicWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey"
  },
  chatWindow: {
    width: "70%",
    height: "300px",
    padding: "20px"
  },
  chatBox: {
    width: "85%"
  },

  chatButton: {
    width: "15%"
  }
}));

function Dashboard() {
  const classes = useStyles();
  // const [a] = React.useContext(CTX);
  const [textValue, changeTextValue] = React.useState("");
  // console.log({ allChats });
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Chat App{" "}
        </Typography>
        <Typography component="h5">Topic Placeholder</Typography>
        <div className={classes.flex}>
          <div className={classes.topicWindow}>
            <List>
              {["topic"].map(topic => (
                <ListItem button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {[{ from: "user", msg: "hello" }].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip label={chat.from} />
                <Typography variant="p">{chat.msg}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            className={classes.chatBox}
            label="Message"
            variant="outlined"
            value={textValue}
            onChange={e => changeTextValue(e.target.value)}
          />
          <Button color="primary" variant="contained">
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Dashboard;
