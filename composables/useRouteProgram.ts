import { Program } from "~/assets/scripts/programs";

export const useRouteProgram = () => {
    let programState = useState('program')

    let routeProgram = useRoute().params["program"]?.toString().toLowerCase()

    if (routeProgram == "ftc") {
        programState.value = Program.FTC;
    } else if (routeProgram == "frc") {
        programState.value = Program.FRC;
    } else {
        programState.value = Program.Generic;
    }

    return programState
}