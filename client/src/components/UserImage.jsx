import { Box } from "@mui/material"

const UserImage = ({ image, size = "60px" }) => {
    return (
        <Box width={size} height = {size}>
            {/* <Avatar
                alt="user"
                src={`http://localhost:3001/assets/${image}`}
                sx={{
                    width: size,
                    height: size,
                    objectFit: "cover",
                }}
            /> */}
            <img
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width={size}
                height={size} 
                src={`http://localhost:3001/assets/${image}`} 
                alt="user" 
            />
        </Box>
    )
}

export default UserImage
