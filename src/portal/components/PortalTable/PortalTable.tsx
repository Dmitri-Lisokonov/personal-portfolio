
import { createStyles, Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Theme, withStyles } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import { PortalTableModel } from "../../models/PortalTableModel";
import "./PortalTable.css";



const PortalTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event: any, newPage: SetStateAction<number>) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    function createData(name: string, code: string, population: number, size: number) {
        const density = population / size;
        return { name, code, population, size, density };
    }

    const rows = [
        new PortalTableModel("hello", "Bye"),
        new PortalTableModel("hello", "Bye"),
        new PortalTableModel("hello", "Bye"),
        new PortalTableModel("hello", "Bye"),
        new PortalTableModel("hello", "Bye"),
        new PortalTableModel("hello", "Bye")
    ];

    const columns = [
        { id: "name", label: "Name", minWidth: 170 },
        { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
        {
            id: "population",
            label: "Population",
            minWidth: 170,
            align: "right",
            format: (value: any) => value.toLocaleString("en-US"),
        },
        {
            id: "size",
            label: "Size\u00a0(km\u00b2)",
            minWidth: 170,
            align: "right",
            format: (value: any) => value.toLocaleString("en-US"),
        },
        {
            id: "density",
            label: "Density",
            minWidth: 170,
            align: "right",
            format: (value: any) => value.toFixed(2),
        },
    ];

    return (
        <div className="portal-table">
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {Object.keys(rows[0]).map((key) => (
                                    <TableCell
                                        key={key}
                                        align="right"
                                        style={{ minWidth: "140" }}
                                    >
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {Object.keys(row).map(key => {
                                                console.log(row[key as keyof PortalTableModel]);
                                                const value = row[key];
                                                return (
                                                    <TableCell key={value} align="right">
                                                        {value}
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
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )


};

export default PortalTable;