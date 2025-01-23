import { ProfileForm } from "./Profileform"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog"

// type setOpen = () => void;

const SavingsModal = ({ open, setOpen }: { open: boolean, setOpen: any }) => {

    const closeDialog = () => {
        setOpen(false)
    }
    return (
        <AlertDialog open={open}>
            <AlertDialogTrigger>Open</AlertDialogTrigger>
            <AlertDialogContent className="max-w-[400px] bg-black border-gray-50 border rounded-md">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">New Savings</AlertDialogTitle>
                    <div className="">
                        <p className="text-sm text-gray-400">Create a new savings</p>
                        <div className="py-2">
                            <ProfileForm />
                        </div>
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeDialog}>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default SavingsModal;