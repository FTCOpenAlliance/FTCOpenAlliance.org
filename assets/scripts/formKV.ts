export abstract class kvLists{
    public static teamType = {
        COMMUNITY: 'Community Team',
        SCHOOL: 'School Team',
    }
    
    public static budget = {
        UNDER_1000: '< 1000 USD',
        BETWEEN_1000_AND_3000: '1000 - 3000 USD',
        BETWEEN_3000_AND_5000: '3000 - 5000 USD',
        OVER_5000: '5000+ USD',
    }
    
    public static workspace = {
        LAB: 'Dedicated Robotics Lab',
        CLASSROOM: 'School Classroom(s)',
        HOME: 'Home Workspace (garage, basement, etc.)',
        SHARED: 'Shared Space (maker space, etc.)',
        OTHER: 'Other',
    }
    
    public static sponsors = {
        NONE: 'No Sponsors',
        ONE_TO_THREE: '1 - 3 Sponsors',
        ABOVE_FOUR: '4+ Sponsors',
    }
    
    public static drivetrain = {
        MECANUM: 'Mecanum',
        TANK: 'Tank',
        H: 'H-Drive',
        X: 'X-Drive',
        KIWI: 'Kiwi',
        COAX_SWERVE: 'Swerve (Coaxial)',
        DIFF_SWERVE: 'Swerve (Differential)',
        SKID: 'Skid Steer',
        OTHER: 'Other',
    }
    
    public static materials = {
        PREFAB_METAL: 'Prefabricated Metal Parts',
        CUSTOM_METAL: 'Custom Metal Parts',
        POLYCARB: 'Polycarbonate',
        CARDBOARD: 'Cardboard',
        WOOD: 'Wood',
        PLASTIC: '3D-Printed Plastic',
        PREFAB_CF: 'Prefabricated Carbon Fiber Parts',
        CUSTOM_CF: 'Custom Carbon Fiber Parts',
        OTHER: 'Other',
    }
    
    public static products = {
        GOBILDA: 'GoBILDA',
        REV: 'REV Robotics',
        ANDYMARK: 'AndyMark',
        VEX: 'VEX Robotics',
        TETRIX: 'Pitsco Tetrix',
        STUDICA: 'Studica Robotics',
        SPARKFUN: 'SparkFun Electronics',
        ADAFRUIT: 'Adafruit Industries',
        MISUMI: 'Misumi',
        AXON: 'Axon',
        SWYFT: 'Swyft Robotics',
        OTHER: 'Other',
    }
    
    public static systems = {
        ARM: 'Rotary Arm',
        SLIDES: 'Linear Slides',
        CLIMBER: 'Climber',
        WINCH: 'Winch System',
        PHYS_FOURBAR: 'Physical Four-Bar Mechanism',
        VIRTUAL_FOURBAR: 'Virtual Four-Bar Mechanism',
        CLAW: 'Claw/Gripper',
        WHEEL_INTAKE: 'Wheel Roller Intake',
        OTHER: 'Other',
    }
    
    public static odometry = {
        NONE: 'No Odometry',
        CUSTOM_DW: 'Custom Dead-Wheel',
        GB_PINPOINT: 'GoBILDA Pinpoint',
        SF_OTOS: 'SparkFun Laser Odometry (OTOS)',
        OTHER: 'Other',
    }
    
    public static sensors = {
        NONE: 'No Sensors',
        DISTANCE: 'Distance',
        TOUCH: 'Touch',
        MAG_LIMIT: 'Magnetic Limit Switch',
        BEAM: 'Beam Break',
        COLOR: 'Color',
        POT: 'Potentiometer',
        IMU: 'External IMU/Gyro',
        LL: 'Limelight 3A',
        HUSKY: 'HuskyLens',
        OTHER: 'Other',
    }

    public static codeLang = {
        BLOCKS: 'OnBot Blocks',
        JAVA: 'Java (OnBot or External IDE',
        OTHER: 'Other',
    }

    public static codeEnv = {
        ONBOT: 'OnBot Java/Blocks',
        STUDIO: 'Android Studio',
        CODE: 'Visual Studio Code',
        IDEA: 'IntelliJ IDEA',
        ECLIPSE: 'Eclipse',
        OTHER: 'Other',
    }

    public static codeTools = {
        DASHBOARD: 'FTC Dashboard',
        LIB: 'FTCLib',
        RR: 'RoadRunner',
        PEDRO: 'Pedro Pathing',
        OTHER: 'Other',
    }

    public static vision = {
        OBJECT: "Object Detection",
        APRIL: "AprilTag Localization",
        CV: "OpenCV",
        OTHER: "Other",
    }
}