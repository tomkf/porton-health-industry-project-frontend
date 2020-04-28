import React from "react";
import AuthContext from "../../../data/AuthContext"
import { BrowserRouter, Link, useRouteMatch } from "react-router-dom";

//material-ui components:
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//new: 
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      width: '100%',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    container: {
      maxHeight: 440,
    },
  });


  //   {
  //     id: 'population',
  //     label: 'Population',
  //     minWidth: 170,
  //     align: 'right',
  //     format: (value) => value.toLocaleString('en-US'),
  //   },
  //   {
  //     id: 'size',
  //     label: 'Size\u00a0(km\u00b2)',
  //     minWidth: 170,
  //     align: 'right',
  //     format: (value) => value.toLocaleString('en-US'),
  //   },
  //   {
  //     id: 'density',
  //     label: 'Density',
  //     minWidth: 170,
  //     align: 'right',
  //     format: (value) => value.toFixed(2),
  //   },




export default function Users() {
    const classes = useStyles();
    let { url } = useRouteMatch();

    const authContext = React.useContext(AuthContext)
    const [users, setUsers] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    React.useEffect(() => {
      const start = async () => {
        let data = await authContext.API.getUsers()
        if (data === undefined){
          console.log("error")
          setError("Error grabbing data from the server.")
        } else if (data.data === undefined){
          console.log("error")
          setError("Error grabbing data from the server.")
        } else {
          authContext.API.readToken(authContext.authState).then(function(result){
            if (result.role !== 'SYSTEM_ADMIN'){
             return setError("404. Please try again.")
            } else {
              setUsers(data.data)
            }
          })
        }
      }
      start()
    }, [])

    const columns = [
      { id: 'name', label: 'General Info', minWidth: 170 },
      { id: 'role', label: 'Role', minWidth: 170 },
      { id: 'email', label: 'Email', minWidth: 120 },
      { id: 'action', label: 'Action', minWidth: 150 }]


      function createData(name, role, email, action, id ){
        return { name, role, email, action, id };
      }

      // const roles = users.map(user => {
      //   createData()
      // })

    // const renderUsers = (usersArr) => {
    //     let userList =  usersArr.users.map((user, index) =>  ( 
           
    //      ))
    //      return(<div>{userList}</div>)
    // }

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const renderUsers = (usersArr) => {
      let userList =  usersArr.users.map((user, index) =>  ( 
        <Card className={classes.root} variant="outlined" key={index}>
        <CardContent>
          <Typography variant="h5" component="h2">
              {user.email}
          </Typography>
          <Typography variant="h5" component="h2">
              {user.role !== "none" ? user.role : ""}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Account created: {user.date}
          </Typography>
        </CardContent>
        <Link to={`${url}/${user._id}`} style={{textDecoration: 'none', color: 'inherit', backgroundColor: 'rgb(104, 251, 234)', borderRadius: '4%'}}> 
          <Button size="small">Client Information and Settings</Button>
        </Link>
        </Card>
       ))
       return(<div>{userList}</div>)
  }

    return(
        <div> 
            {console.log(typeof users, users)}
            {error !== null ? error : ""}
            {users !== null && users !== undefined ? 
        <div>
        <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
        </div>
         : ""}
       </div>
    ) 
  }