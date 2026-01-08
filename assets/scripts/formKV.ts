export abstract class ftcKV{

    public static TeamType = {
        COMMUNITY: 'Community Team',
        SCHOOL: 'School Team',
    }
    
    public static Budget = {
        UNDER_1000: '< 1000 USD',
        BETWEEN_1000_AND_3000: '1000 - 3000 USD',
        BETWEEN_3000_AND_5000: '3000 - 5000 USD',
        OVER_5000: '5000+ USD',
    }
    
    public static Workspace = {
        LAB: 'Dedicated Robotics Lab',
        CLASSROOM: 'School Classroom(s)',
        HOME: 'Home Workspace (garage, basement, etc.)',
        SHARED: 'Shared Space (maker space, etc.)',
        OTHER: 'Other',
    }
    
    public static Sponsors = {
        NONE: 'No Sponsors',
        ONE_TO_THREE: '1 - 3 Sponsors',
        ABOVE_FOUR: '4+ Sponsors',
    }
    
    public static Drivetrain = {
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
    
    public static Materials = {
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
    
    public static Products = {
        GOBILDA: 'GoBILDA',
        REV: 'REV Robotics',
        ANDYMARK: 'AndyMark',
        VEX: 'VEX Robotics',
        WCP: 'West Coast Products',
        TETRIX: 'Pitsco Tetrix',
        STUDICA: 'Studica Robotics',
        SPARKFUN: 'SparkFun Electronics',
        ADAFRUIT: 'Adafruit Industries',
        MISUMI: 'Misumi',
        AXON: 'Axon',
        SWYFT: 'Swyft Robotics',
        OTHER: 'Other',
    }
    
    public static Systems = {
        ARM: 'Rotary Arm',
        SLIDES: 'Linear Slides',
        ELEVATOR: 'Elevator',
        CLIMBER: 'Climber',
        WINCH: 'Winch System',
        PHYS_FOURBAR: 'Physical Four-Bar Mechanism',
        VIRTUAL_FOURBAR: 'Virtual Four-Bar Mechanism',
        CLAW: 'Claw/Gripper',
        WHEEL_INTAKE: 'Wheel Roller Intake',
        SHOOTER: 'Shooting Mechanism',
        TURNTABLE: 'Turntable',
        INDEXER: 'Indexer',
        OTHER: 'Other',
    }
    
    public static Odometry = {
        NONE: 'No Odometry',
        CUSTOM_DW: 'Custom Dead-Wheel',
        GB_PINPOINT: 'GoBILDA Pinpoint',
        SF_OTOS: 'SparkFun Laser Odometry (OTOS)',
        OTHER: 'Other',
    }
    
    public static Sensors = {
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

    public static CodeLang = {
        BLOCKS: 'OnBot Blocks',
        JAVA: 'Java (OnBot or External IDE)',
        OTHER: 'Other',
    }

    public static CodeEnv = {
        ONBOT: 'OnBot Java/Blocks',
        STUDIO: 'Android Studio',
        CODE: 'Visual Studio Code',
        IDEA: 'IntelliJ IDEA',
        ECLIPSE: 'Eclipse',
        OTHER: 'Other',
    }

    public static CodeTools = {
        DASHBOARD: 'FTC Dashboard',
        LIB: 'FTCLib',
        RR: 'RoadRunner',
        PEDRO: 'Pedro Pathing',
        OTHER: 'Other',
    }

    public static Vision = {
        OBJECT: "Object Detection",
        APRIL: "AprilTag Localization",
        CV: "OpenCV",
        OTHER: "Other",
    }
}

export abstract class frcKV{

    public static TeamType = {
        COMMUNITY: 'Community Team',
        SCHOOL: 'School Team',
    }
    
    public static Budget = {
        UNDER_5000: '< 5000 USD',
        BETWEEN_5000_AND_10000: '5000 - 10000 USD',
        BETWEEN_10000_AND_15000: '10000 - 15000 USD',
        OVER_15000: '15000+ USD',
    }
    
    public static Workspace = {
        LAB: 'Dedicated Robotics Lab',
        CLASSROOM: 'School Classroom(s)',
        HOME: 'Home Workspace (garage, basement, etc.)',
        SHARED: 'Shared Space (maker space, etc.)',
        OTHER: 'Other',
    }
    
    public static Sponsors = {
        NONE: 'No Sponsors',
        ONE_TO_FOUR: '1 - 4 Sponsors',
        ABOVE_FIVE: '5+ Sponsors',
    }
    
    public static Drivetrain = {
        MECANUM: 'Mecanum',
        TANK: 'Tank',
        H: 'H-Drive',
        SDS_SWERVE: 'SDS Swerve',
        REV_SWERVE: 'MAXSwerve',
        WCP_SWERVE: 'West Coast Swerve X',
        THRIFTY_SWERVE: 'Thrifty Swerve',
        OTHER: 'Other',
    }
    
    public static Materials = {
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
    
    public static Products = {
        REV: 'REV Robotics',
        ANDYMARK: 'AndyMark',
        VEX: 'VEX Robotics',
        CTRE: 'CTRE',
        AXON: 'Axon',
        REDUX: 'Redux Robotics',
        SPARKFUN: 'SparkFun Electronics',
        ADAFRUIT: 'Adafruit Industries',
        SWYFT: 'Swyft Robotics',
        WCP: 'West Coast Products',
        THRIFTY: 'Thrifty Bot',
        SDS: 'Swerve Drive Specialties',
        OTHER: 'Other',
    }
    
    public static Systems = {
        ARM: 'Rotary Arm',
        SLIDES: 'Linear Slides',
        ELEVATOR: 'Elevator',
        CLIMBER: 'Climber',
        WINCH: 'Winch System',
        PHYS_FOURBAR: 'Physical Four-Bar Mechanism',
        VIRTUAL_FOURBAR: 'Virtual Four-Bar Mechanism',
        CLAW: 'Claw/Gripper',
        WHEEL_INTAKE: 'Wheel Roller Intake',
        SHOOTER: 'Shooting Mechanism',
        INDEXER: 'Indexer',
        TURNTABLE: 'Turntable',
        OTHER: 'Other',
    }
    
    public static Odometry = {
        NONE: 'No Odometry',
        YEA: 'Using Odometry'
    }
    
    public static Sensors = {
        NONE: 'No Sensors',
        DISTANCE: 'Distance',
        TOUCH: 'Touch',
        MAG_LIMIT: 'Magnetic Limit Switch',
        BEAM: 'Beam Break',
        COLOR: 'Color',
        POT: 'Potentiometer',
        NAVX: 'NavX',
        CGYRO: 'Redux Canandgyro',
        LL: 'Limelight',
        CAM: 'Vision Camera (PhotonVision, etc.)',
        OTHER: 'Other',
    }

    public static CodeLang = {
        CPP: 'C++',
        JAVA: 'Java',
        PYTHON: 'Python',
        LABVIEW: 'LabVIEW',
        OTHER: 'Other',
    }

    public static CodeEnv = {
        CODE: 'Visual Studio Code',
        LABVIEW: 'LabVIEW',
        OTHER: 'Other',
    }

    public static CodeTools = {
        SCOPE: 'AdvantageScope',
        CHOREO: 'Choreo',
        PATH: 'Path Planner',
        CUSTOM: 'Custom Tools',
        OTHER: 'Other',
    }

    public static Vision = {
        OBJECT: "Object Detection",
        APRIL: "AprilTag Localization",
        CV: "OpenCV",
        OTHER: "Other",
    }
}