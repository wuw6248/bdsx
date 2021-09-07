/**
 * Generated with the enum generator.
 * Please DO NOT modify this directly.
 * If it's needed to update, Modify bdsx/minecraft_impl/enums_ini/*.ini instead
 */
declare module "../minecraft" {
    enum AbilitiesIndex {
        Build,
        Mine,
        DoorsAndSwitches,
        OpenContainers,
        AttackPlayers,
        AttackMobs,
        OperatorCommands,
        Teleport,
        // Both are 8
        ExposedAbilityCount,
        Invulnerable = 8,
        Flying,
        MayFly,
        Instabuild,
        Lightning,
        FlySpeed,
        WalkSpeed,
        Muted,
        WorldBuilder,
        NoClip,
        AbilityCount,
    }
    namespace Ability {
        enum Options {
            None,
            NoSave,
            CommandExposed = 2,
            PermissionsInterfaceExposed = 4,
            WorldbuilderOverrides = 8,
            NoSaveCommandExposed = 3,
            NoSavePermissionsInterfaceExposed = 5,
            CommandExposedPermissionsInterfaceExposed = 6,
            NoSaveCommandExposedPermissionsInterfaceExposed = 7,
            NoSaveWorldbuilderOverrides = 9,
            CommandExposedWorldbuilderOverrides = 10,
            NoSaveCommandExposedWorldbuilderOverrides = 11,
            PermissionsInterfaceExposedWorldbuilderOverrides = 12,
            NoSavePermissionsInterfaceExposedWorldbuilderOverrides = 13,
            CommandExposedPermissionsInterfaceExposedWorldbuilderOverrides = 14,
            All = 15,
        }
    }
    namespace Ability {
        enum Type {
            Invalid,
            Unset,
            Bool,
            Float,
        }
    }
    enum ActorDamageCause {
        /** The kill command */
        Override,
        /** @deprecated */
        None = 0,
        Contact,
        EntityAttack,
        Projectile,
        Suffocation,
        /** @deprecated Typo */
        Suffoocation = 4,
        Fall,
        Fire,
        FireTick,
        Lava,
        Drowning,
        BlockExplosion,
        EntityExplosion,
        Void,
        Suicide,
        Magic,
        Wither,
        Starve,
        Anvil,
        Thorns,
        FallingBlock,
        Piston,
        FlyIntoWall,
        Magma,
        Fireworks,
        Lightning,
        Charging,
        Temperature = 0x1A,
        All = 0x1F,
    }
    namespace ActorEventPacket {
        enum Events {
            Jump = 1,
            HurtAnimation,
            DeathAnimation,
            ArmSwing,
            StopAttack,
            TameFail,
            TameSuccess,
            ShakeWet,
            UseItem,
            EatGrassAnimation,
            FishHookBubble,
            FishHookPosition,
            FishHookHook,
            FishHookTease,
            SquidInkCloud,
            ZombieVillagerCure,
            AmbientSound,
            Respawn,
            IronGolemOfferFlower,
            IronGolemWithdrawFlower,
            LoveParticles,
            VillagerAngry,
            VillagerHappy,
            WitchSpellParticles,
            FireworkParticles,
            InLoveParticles,
            SilverfishSpawnAnimation,
            GuardianAttack,
            WitchDrinkPotion,
            WitchThrowPotion,
            MinecartTntPrimeFuse,
            CreeperPrimeFuse,
            AirSupplyExpired,
            PlayerAddXpLevels,
            ElderGuardianCurse,
            AgentArmSwing,
            EnderDragonDeath,
            DustParticles,
            ArrowShake,
            EatingItem = 57,
            BabyAnimalFeed = 60,
            DeathSmokeCloud,
            CompleteTrade,
            RemoveLeash,
            ConsumeTotem = 65,
            PlayerCheckTreasureHunterAchievement,
            EntitySpawn,
            DragonPuke,
            ItemEntityMerge,
            StartSwim,
            BalloonPop,
            TreasureHunt,
            AgentSummon,
            ChargedCrossbow,
            Fall,
        }
    }
    enum ActorFlags {
        OnFire,
        Sneaking,
        Riding,
        Sprinting,
        UsingItem,
        Invisible,
        Tempted,
        InLove,
        Saddled,
        Powered,
        Ignit0ed,
        Baby,
        Converting,
        Critical,
        CanShowName,
        AlwaysShowName,
        NoAI,
        Silent,
        WallClimbing,
        CanClimb,
        CanSwim,
        CanFly,
        CanWalk,
        Resting,
        Sitting,
        Angry,
        Interested,
        Charged,
        Tamed,
        Orphaned,
        Leashed,
        Sheared,
        Gliding,
        Elder,
        Moving,
        Breathing,
        Chested,
        Stackable,
        ShowBottom,
        Standing,
        Shaking,
        Idling,
        Casting,
        Charging,
        WasdControlled,
        CanPowerJump,
        Lingering,
        HasCollision,
        HasGravity,
        FireImmune,
        Dancing,
        Enchanted,
        ReturnTrident,
        ContainerIsPrivate,
        IsTransforming,
        DamageNearbyMobs,
        Swimming,
        Bribed,
        IsPregnant,
        LayingEgg,
        RiderCanPick,
        TransitionSitting,
        Eating,
        LayingDown,
        Snezing,
        Trusting,
        Rolling,
        Scared,
        InScaffolding,
        OverScaffolding,
        FallThroughScaffolding,
        Blocking,
        TransitionBlocking,
        BlockedUsingShield,
        BlockedUsingDamagedShield,
        Sleeping,
        WantsToWake,
        TradeInterest,
        DoorBreaker,
        BreakingObstruction,
        DoorOpener,
        IsIllagerCaptain,
        Stunned,
        Roaring,
        DelayedAttack,
        IsAvoidingMobs,
        FacingTargetToRangeAttack,
        HiddenWhenInvisible,
        IsInUI,
        Stalking,
        Emoting,
        Celebrating,
    }
    enum ActorType {
        Item = 0x40,
        PrimedTnt,
        FallingBlock,
        MovingBlock,
        Experience,
        EyeOfEnder,
        EnderCrystal,
        FireworksRocket,
        FishingHook = 0x4D,
        Chalkboard,
        Painting = 0x53,
        LeashKnot = 0x58,
        BoatRideable = 0x5A,
        LightningBolt = 0x5D,
        AreaEffectCloud,
        Balloon = 0x6B,
        Shield = 0x75,
        Lectern = 0x77,
        TypeMask = 0xFF,
        Mob,
        Npc = 0x133,
        Agent = 0x138,
        ArmorStand = 0x13D,
        TripodCamera,
        Player,
        Bee = 0x17A,
        Piglin,
        PiglinBrute = 0x17F,
        PathfinderMob = 0x300,
        IronGolem = 0x314,
        SnowGolem,
        WanderingTrader = 0x376,
        Monster = 0xB00,
        Creeper = 0xB21,
        Slime = 0xB25,
        EnderMan,
        Ghast = 0xB29,
        LavaSlime = 0xB2A,
        Blaze,
        Witch = 0xB2D,
        Guardian = 0xB31,
        ElderGuardian,
        Dragon = 0xB35,
        Shulker,
        Vindicator = 0xB39,
        IllagerBeast = 0xB3B,
        EvocationIllager = 0xB68,
        Vex,
        Pillager = 0xB72,
        ElderGuardianGhost = 0xB78,
        Animal = 0x1300,
        Chicken = 0x130A,
        Cow,
        Pig,
        Sheep,
        MushroomCow = 0x1310,
        Rabbit = 0x1312,
        PolarBear = 0x131C,
        Llama,
        Turtle = 0x134A,
        Panda = 0x1371,
        Fox = 0x1379,
        Hoglin = 0x137C,
        Strider,
        Goat = 0x1380,
        Axolotl = 0x1382,
        WaterAnimal = 0x2300,
        Squid = 0x2311,
        Dolphin = 0x231F,
        Pufferfish = 0x236C,
        Salmon,
        Tropicalfish = 0x236F,
        Fish,
        GlowSquid = 0x2381,
        TameableAnimal = 0x5300,
        Wolf = 0x530E,
        Ocelot = 0x5316,
        Parrot = 0x531E,
        Cat = 0x534B,
        Ambient = 0x8100,
        Bat = 0x8113,
        UndeadMob = 0x10B00,
        PigZombie = 0x10B24,
        WitherBoss = 0x10B34,
        Phantom = 0x10B3A,
        Zoglin = 0x10B7E,
        ZombieMonster = 0x30B00,
        Zombie = 0x30B20,
        ZombieVillager = 0x30B2C,
        Husk = 0x30B2F,
        Drowned = 0x30B6E,
        ZombieVillagerV2 = 0x30B74,
        Arthropod = 0x40B00,
        Spider = 0x40B23,
        Silverfish = 0x40B27,
        CaveSpider,
        Endermite = 0x40B37,
        Minecart = 0x80000,
        MinecartRideable = 0x80054,
        MinecartHopper = 0x80060,
        MinecartTNT,
        MinecartChest,
        MinecartFurnace,
        MinecartCommandBlock,
        SkeletonMonster = 0x110B00,
        Skeleton = 0x110B22,
        Stray = 0x110B2E,
        WitherSkeleton = 0x110B30,
        EquineAnimal = 0x205300,
        Horse = 0x205317,
        Donkey,
        Mule,
        SkeletonHorse = 0x215B1A,
        ZombieHorse,
        Projectile = 0x400000,
        ExperiencePotion = 0x400044,
        ShulkerBullet = 0x40004C,
        DragonFireball = 0x40004F,
        Snowball = 0x400051,
        ThrownEgg,
        LargeFireball = 0x400055,
        ThrownPotion,
        Enderpearl,
        WitherSkull = 0x400059,
        WitherSkullDangerous = 0x40005B,
        SmallFireball = 0x40005E,
        LingeringPotion = 0x400065,
        LlamaSpit,
        EvocationFang,
        IceBomb = 0x40006A,
        AbstractArrow = 0x800000,
        Trident = 0x0C00049,
        Arrow,
        VillagerBase = 0x1000300,
        Villager = 0x100030F,
        VillagerV2 = 0x1000373,
    }
    namespace AnimatePacket {
        enum Actions {
            SwingArm = 1,
            WakeUp = 3,
            CriticalHit,
            MagicCriticalHit,
            RowRight = 128,
            RowLeft,
        }
    }
    enum ArmorSlot {
        Head,
        /** IDA said this is called Torso */
        Torso,
        Chest = 1,
        Legs,
        Feet,
    }
    namespace BookEditPacket {
        enum Types {
            ReplacePage,
            AddPage,
            DeletePage,
            SwapPages,
            SignBook,
        }
    }
    namespace BossEventPacket {
        enum Colors {
            Pink,
            Blue,
            Red,
            Green,
            Yellow,
            Purple,
            White,
        }
    }
    namespace BossEventPacket {
        enum Overlay {
            Progress,
            Notched6,
            Notched10,
            Notched12,
            Notched20,
        }
    }
    namespace BossEventPacket {
        enum Types {
            Show,
            RegisterPlayer,
            Hide,
            UnregisterPlayer,
            HealthPercent,
            Title,
            Properties,
            Style,
        }
    }
    namespace CameraShakePacket {
        enum ShakeAction {
            Add,
            Stop,
        }
    }
    namespace CameraShakePacket {
        enum ShakeType {
            Positional,
            Rotational,
        }
    }
    namespace CompletedUsingItemPacket {
        enum Actions {
            EquipArmor,
            Eat,
            Attack,
            Consume,
            Throw,
            Shoot,
            Place,
            FillBottle,
            FillBucket,
            PourBucket,
            UseTool,
            Interact,
            Retrieved,
            Dyed,
            Traded,
        }
    }
    namespace ComplexInventoryTransaction {
        enum Type {
            NormalTransaction,
            InventoryMismatch,
            ItemUseTransaction,
            ItemUseOnEntityTransaction,
            ItemReleaseTransaction,
        }
    }
    enum ContainerType {
        Container,
        Workbench,
        Furnace,
        Enchantment,
        BrewingStand,
        Anvil,
        Dispenser,
        Dropper,
        Hopper,
        Cauldron,
        MinecartChest,
        MinecartHopper,
        Horse,
        Beacon,
        StructureEditor,
        Trade,
        CommandBlock,
        Jukebox,
        Armor,
        Hand,
        CompoundCreator,
        ElementConstructor,
        MaterialReducer,
        LabTable,
        Loom,
        Lectern,
        Grindstone,
        BlastFurnace,
        Smoker,
        Stonecutter,
        Cartography,
        None = 0xF7,
        Inventory = 0xFF,
    }
    enum CreativeItemCategory {
        All,
        Construction,
        Nature,
        Equipment,
        Items,
        Uncategorized,
    }
    enum Difficulty {
        Peaceful,
        Easy,
        Normal,
        Hard,
    }
    namespace Enchant {
        enum Type {
            ArmorAll,
            ArmorFire,
            ArmorFall,
            ArmorExplosive,
            ArmorProjectile,
            ArmorThorns,
            WaterBreath,
            WaterSpeed,
            WaterAffinity,
            WeaponDamage,
            WeaponUndead,
            WeaponArthropod,
            WeaponKnockback,
            WeaponFire,
            WeaponLoot,
            MiningEfficiency,
            MiningSilkTouch,
            MiningDurability,
            MiningLoot,
            BowDamage,
            BowKnockback,
            BowFire,
            BowInfinity,
            FishingLoot,
            FishingLure,
            FrostWalker,
            Mending,
            CurseBinding,
            CurseVanishing,
            TridentImpaling,
            TridentRiptide,
            TridentLoyalty,
            TridentChanneling,
            CrossbowMultishot,
            CrossbowPiercing,
            CrossbowQuickCharge,
            SoulSpeed,
            NumEnchantments,
            InvalidEnchantment,
            // Alternative names
            Protection = 0,
            FireProtection = 1,
            FeatherFalling = 2,
            BlastProtection = 3,
            ProjectileProtection = 4,
            Thorns = 5,
            Respiration = 6,
            DepthStrider = 7,
            AquaAffinity = 8,
            Sharpness = 9,
            Smite = 10,
            BaneOfArthropods = 11,
            Knockback = 12,
            FireAspect = 13,
            Looting = 14,
            Efficiency = 15,
            SilkTouch = 16,
            Unbreaking = 17,
            Fortune = 18,
            Power = 19,
            Punch = 20,
            Flame = 21,
            Infinity = 22,
            LuckOfTheSea = 23,
            Lure = 24,
            // FrostWalker = 25
            // Mending = 26
            BindingCurse = 27,
            VanishingCurse = 28,
            Impaling = 29,
            Riptide = 30,
            Loyalty = 31,
            Channeling = 32,
            Multishot = 33,
            Piercing = 34,
            QuickCharge = 35,
            // SoulSpeed = 36
        }
    }
    namespace Facing {
        enum Name {
            Down,
            Up,
            North,
            South,
            West,
            East,
            Max,
        }
    }
    namespace GameRule {
        enum Type {
            Invalid,
            Bool,
            Int,
            Float,
        }
    }
    enum GameType {
        Survival,
        Creative,
        Adventure,
        SurvivalSpectator,
        CreativeSpectator,
        Default,
    }
    namespace IdentityDefinition {
        enum Type {
            Invalid,
            Player,
            Entity,
            FakePlayer,
        }
    }
    namespace InteractPacket {
        enum Actions {
            LeaveVehicle = 3,
            Mouseover,
            OpenNPC,
            OpenInventory,
        }
    }
    namespace ItemReleaseInventoryTransaction {
        enum ActionType {
            Release,
            Use,
        }
    }
    namespace ItemUseInventoryTransaction {
        enum ActionType {
            Place,
            Use,
            Destroy,
        }
    }
    namespace ItemUseOnActorInventoryTransaction {
        enum ActionType {
            Interact,
            Attack,
            ItemInteract,
        }
    }
    namespace Json {
        enum ValueType {
            Null = 0,
            Int32 = 1,
            Int64 = 2,
            Float64 = 3,
            String = 4,
            Boolean = 5,
            Array = 6,
            Object = 7,
        }
    }
    enum MinecraftPacketIds {
        // referred from: https://github.com/NiclasOlofsson/MiNET/blob/master/src/MiNET/MiNET/Net/MCPE%20Protocol%20Documentation.md
        Login = 0x01,
        PlayStatus = 0x02,
        ServerToClientHandshake = 0x03,
        ClientToServerHandshake = 0x04,
        Disconnect = 0x05,
        ResourcePacksInfo = 0x06,
        /** @deprecated use ResourcePackStack, follow the real class name */
        ResourcePacksStack = 0x07,
        ResourcePackStack = 0x07,
        ResourcePackClientResponse = 0x08,
        Text = 0x09,
        SetTime = 0x0a,
        StartGame = 0x0b,
        AddPlayer = 0x0c,
        AddActor = 0x0d,
        RemoveActor = 0x0e,
        AddItemActor = 0x0f,
        TakeItemActor = 0x11,
        MoveActorAbsolute = 0x12,
        MovePlayer = 0x13,
        RiderJump = 0x14,
        UpdateBlock = 0x15,
        AddPainting = 0x16,
        TickSync = 0x17,
        LevelSoundEventV1 = 0x18,
        LevelEvent = 0x19,
        BlockEvent = 0x1a,
        /** @deprecated use ActorEvent, matching to official name */
        EntityEvent = 0x1b,
        ActorEvent = 0x1b,
        MobEffect = 0x1c,
        UpdateAttributes = 0x1d,
        InventoryTransaction = 0x1e,
        MobEquipment = 0x1f,
        MobArmorEquipment = 0x20,
        Interact = 0x21,
        BlockPickRequest = 0x22,
        ActorPickRequest = 0x23,
        PlayerAction = 0x24,
        HurtArmor = 0x26,
        /** @deprecated use SetActorData, matching to official name */
        SetEntityData = 0x27,
        SetActorData = 0x27,
        /** @deprecated use SetActorMotion, matching to official name */
        SetEntityMotion = 0x28,
        SetActorMotion = 0x28,
        SetActorLink = 0x29,
        SetHealth = 0x2a,
        SetSpawnPosition = 0x2b,
        Animate = 0x2c,
        Respawn = 0x2d,
        ContainerOpen = 0x2e,
        ContainerClose = 0x2f,
        PlayerHotbar = 0x30,
        InventoryContent = 0x31,
        InventorySlot = 0x32,
        ContainerSetData = 0x33,
        CraftingData = 0x34,
        CraftingEvent = 0x35,
        GuiDataPickItem = 0x36,
        AdventureSettings = 0x37,
        BlockActorData = 0x38,
        PlayerInput = 0x39,
        LevelChunk = 0x3a,
        SetCommandsEnabled = 0x3b,
        SetDifficulty = 0x3c,
        ChangeDimension = 0x3d,
        SetPlayerGameType = 0x3e,
        PlayerList = 0x3f,
        SimpleEvent = 0x40,
        TelemetryEvent = 0x41,
        SpawnExperienceOrb = 0x42,
        MapItemData = 0x43,
        MapInfoRequest = 0x44,
        RequestChunkRadius = 0x45,
        ChunkRadiusUpdated = 0x46,
        ItemFrameDropItem = 0x47,
        GameRulesChanged = 0x48,
        Camera = 0x49,
        BossEvent = 0x4a,
        ShowCredits = 0x4b,
        AvailableCommands = 0x4c,
        CommandRequest = 0x4d,
        CommandBlockUpdate = 0x4e,
        CommandOutput = 0x4f,
        ResourcePackDataInfo = 0x52,
        ResourcePackChunkData = 0x53,
        ResourcePackChunkRequest = 0x54,
        Transfer = 0x55,
        PlaySound = 0x56,
        StopSound = 0x57,
        SetTitle = 0x58,
        AddBehaviorTree = 0x59,
        StructureBlockUpdate = 0x5a,
        ShowStoreOffer = 0x5b,
        PurchaseReceipt = 0x5c,
        PlayerSkin = 0x5d,
        SubClientLogin = 0x5e,
        WSConnect = 0x5f,
        SetLastHurtBy = 0x60,
        BookEdit = 0x61,
        NpcRequest = 0x62,
        PhotoTransfer = 0x63,
        /** @deprecated use ModalFormRequest, follow the real class name */
        ShowModalForm = 0x64,
        ModalFormRequest = 0x64,
        ModalFormResponse = 0x65,
        ServerSettingsRequest = 0x66,
        ServerSettingsResponse = 0x67,
        ShowProfile = 0x68,
        SetDefaultGameType = 0x69,
        RemoveObjective = 0x6a,
        SetDisplayObjective = 0x6b,
        SetScore = 0x6c,
        LabTable = 0x6d,
        UpdateBlockSynced = 0x6e,
        /** @deprecated use MoveActorDelta, matching to official name */
        MoveEntityDelta = 0x6f,
        MoveActorDelta = 0x6f,
        SetScoreboardIdentity = 0x70,
        SetLocalPlayerAsInitialized = 0x71,
        UpdateSoftEnum = 0x72,
        NetworkStackLatency = 0x73,
        ScriptCustomEvent = 0x75,
        SpawnParticleEffect = 0x76,
        AvailableActorIdentifiers = 0x77,
        LevelSoundEventV2 = 0x78,
        NetworkChunkPublisherUpdate = 0x79,
        BiomeDefinitionList = 0x7a,
        LevelSoundEvent = 0x7b,
        LevelEventGeneric = 0x7c,
        LecternUpdate = 0x7d,
        RemoveEntity = 0x80,
        ClientCacheStatus = 0x81,
        OnScreenTextureAnimation = 0x82,
        MapCreateLockedCopy = 0x83,
        StructureTemplateDataRequest = 0x84,
        StructureTemplateDataExport = 0x85,
        ClientCacheBlobStatus = 0x87,
        ClientCacheMissResponse = 0x88,
        EducationSettings = 0x89,
        Emote = 0x8a,
        MultiplayerSettings = 0x8b,
        SettingsCommand = 0x8c,
        AnvilDamage = 0x8d,
        CompletedUsingItem = 0x8e,
        NetworkSettings = 0x8f,
        PlayerAuthInput = 0x90,
        CreativeContent = 0x91,
        PlayerEnchantOptions = 0x92,
        ItemStackRequest = 0x93,
        ItemStackResponse = 0x94,
        PlayerArmorDamage = 0x95,
        CodeBuilder = 0x96,
        UpdatePlayerGameType = 0x97,
        EmoteList = 0x98,
        PositionTrackingDBServerBroadcast = 0x99,
        PositionTrackingDBClientRequest = 0x9a,
        DebugInfo = 0x9b,
        PacketViolationWarning = 0x9c,
        MotionPredictionHints = 0x9d,
        AnimateEntity = 0x9e,
        CameraShake = 0x9f,
        PlayerFog = 0xa0,
        CorrectPlayerMovePrediction = 0xa1,
        ItemComponent = 0xa2,
        FilterText = 0xa3,
        ClientboundDebugRenderer = 0xa4,
        SyncActorProperty = 0xa5,
        AddVolumeEntity = 0xa6,
        RemoveVolumeEntity = 0xa7,
        SimulationType = 0xa8,
        NpcDialogue = 0xa9,
    }
    namespace MovePlayerPacket {
        enum Modes {
            Normal,
            Reset,
            Teleport,
            Pitch,
        }
    }
    namespace NpcDialoguePacket {
        enum Actions {
            Open,
            Close,
        }
    }
    enum ObjectiveSortOrder {
        Ascending,
        Descending,
    }
    enum PackType {
        Invalid,
        Addon,
        Cached,
        CopyProtected,
        Behavior,
        PersonaPiece,
        Resources,
        Skins,
        WorldTemplate,
        Count,
    }
    namespace PlayerActionPacket {
        enum Actions {
            /** @deprecated */
            StartBreak,
            /** @deprecated */
            AbortBreak,
            /** @deprecated */
            StopBreak,
            GetUpdatedBlock,
            /** @deprecated */
            DropItem,
            StartSleeping,
            StopSleeping,
            Respawn,
            /** @deprecated */
            Jump,
            /** @deprecated */
            StartSprint,
            /** @deprecated */
            StopSprint,
            /** @deprecated */
            StartSneak,
            /** @deprecated */
            StopSneak,
            CreativePlayerDestroyBlock,
            DimensionChangeAck,
            /** @deprecated */
            StartGlide,
            /** @deprecated */
            StopGlide,
            /** @deprecated */
            BuildDenied,
            CrackBreak,
            /** @deprecated */
            ChangeSkin,
            /** @deprecated */
            SetEnchantmentSeed,
            /** @deprecated */
            StartSwimming,
            /** @deprecated */
            StopSwimming,
            StartSpinAttack,
            StopSpinAttack,
            InteractBlock,
            PredictDestroyBlock,
            ContinueDestroyBlock,
        }
    }
    enum PlayerScoreSetFunction {
        Set,
        Add,
        Subtract,
    }
    namespace PositionTrackingDBClientRequestPacket {
        enum Actions {
            Query,
        }
    }
    namespace PositionTrackingDBServerBroadcastPacket {
        enum Actions {
            Update,
            Destroy,
            NotFound,
        }
    }
    enum ResourcePackResponse {
        Cancel = 1,
        Downloading,
        DownloadingFinished,
        ResourcePackStackFinished,
    }
    namespace ScorePacketInfo {
        enum Type {
            PLAYER = 1,
            ENTITY = 2,
            FAKE_PLAYER = 3,
        }
    }
    namespace SetScorePacket {
        enum Type {
            CHANGE = 0,
            REMOVE = 1,
        }
    }
    namespace SetTitlePacket {
        enum Types {
            Clear,
            Reset,
            Title,
            Subtitle,
            Actionbar,
            AnimationTimes,
        }
    }
    namespace TextPacket {
        enum Types {
            Raw,
            Chat,
            Translate,
            /** @deprecated */
            Translated = 2,
            Popup,
            JukeboxPopup,
            Tip,
            SystemMessage,
            /** @deprecated */
            Sytem = 6,
            Whisper,
            /** /say command */
            Announcement,
            TextObject,
            /** @deprecated */
            ObjectWhisper = 9,
        }
    }
    namespace UpdateBlockPacket {
        enum DataLayerIds {
            Normal,
            Liquid,
        }
    }
    namespace UpdateBlockPacket {
        enum Flags {
            None,
            Neighbors,
            Network,
            All,
            NoGraphic,
            Priority = 8,
            AllPriority = 11,
        }
    }
}
export {};