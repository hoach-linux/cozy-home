import { Backdrop, CircularProgress } from "@mui/material";


export default function Loading() {
    return (
        <Backdrop open className="blur-md">
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}