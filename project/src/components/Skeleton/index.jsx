import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Skeletons = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="rectangular" width={250} height={200} />
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', width: 150 }} />
            <Skeleton variant="text" sx={{ fontSize: '.5rem', width: 100 }} />
            <Skeleton variant="rounded" width={250} height={35} />
        </Stack>
    )
}
export default Skeletons