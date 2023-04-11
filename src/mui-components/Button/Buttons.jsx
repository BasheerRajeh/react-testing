import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const Buttons = () => {
    return (
        <Stack direction="column" spacing={2} alignItems="center">

            <Typography>Basic Buttons</Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>{" "}
            </Stack>

            <Typography>Text button</Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button>
                <Button variant="contained" disableElevation>
                    Disable elevation
                </Button>
            </Stack>

            <Typography>Color button</Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error" disableElevation>
                    Error
                </Button>
            </Stack>

            <Typography>Size button</Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Box sx={{ '& button': { m: 1 } }}>
                    <div>
                        <Button size="small">Small</Button>
                        <Button size="medium">Medium</Button>
                        <Button size="large">Large</Button>
                    </div>
                    <div>
                        <Button variant="outlined" size="small">
                            Small
                        </Button>
                        <Button variant="outlined" size="medium">
                            Medium
                        </Button>
                        <Button variant="outlined" size="large">
                            Large
                        </Button>
                    </div>
                    <div>
                        <Button variant="contained" size="small">
                            Small
                        </Button>
                        <Button variant="contained" size="medium">
                            Medium
                        </Button>
                        <Button variant="contained" size="large">
                            Large
                        </Button>
                    </div>
                </Box>
            </Stack>

            <Typography>Upload button</Typography>
            <Stack direction='row' spacing={2} justifyContent='center'>
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                </IconButton>
            </Stack>
            
        </Stack>
    );
};

export default Buttons;
