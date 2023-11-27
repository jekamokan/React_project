import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SkeletonCategories = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="rectangular" width={100} height={20} />
        </Stack>
    )
}
export default SkeletonCategories