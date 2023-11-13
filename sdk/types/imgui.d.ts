// @ts-nocheck
declare module "imgui" {
  class ImString {
    constructor(value: string);

    value: string;
  }

  class ImBool {
    constructor(value: boolean);

    value: boolean;
  }

  class ImInt {
    constructor(value: number);

    value: number;
  }

  class ImFloat {
    constructor(value: number);

    value: number;
  }

  class ImVec2 {
    constructor(x: number, y: number);

    x: number;
    y: number;
  }

  class ImVec4 {
    constructor(x: number, y: number, z: number, w: number);

    x: number;
    y: number;
    z: number;
    w: number;
  }

  class Viewport {
    flags: number;
    pos: ImVec2;
    size: ImVec2;
    workPos: ImVec2;
    workSize: ImVec2;

    getCenter: function(): ImVec2;
    getWorkCenter: function(): ImVec2;
  }

  enum WindowFlags {
    None,
    NoTitleBar,
    NoResize,
    NoMove,
    NoScrollbar,
    NoScrollWithMouse,
    NoCollapse,
    AlwaysAutoResize,
    NoBackground,
    NoSavedSettings,
    NoMouseInputs,
    MenuBar,
    HorizontalScrollbar,
    NoFocusOnAppearing,
    NoBringToFrontOnFocus,
    AlwaysVerticalScrollbar,
    AlwaysHorizontalScrollbar,
    AlwaysUseWindowPadding,
    NoNavInputs,
    NoNavFocus,
    UnsavedDocument,
    NoNav,
    NoDecoration,
    NoInputs,
  }

  enum InputTextFlags {
    None,
    CharsDecimal,
    CharsHexadecimal,
    CharsUppercase,
    CharsNoBlank,
    AutoSelectAll,
    EnterReturnsTrue,
    CallbackCompletion,
    CallbackHistory,
    CallbackAlways,
    CallbackCharFilter,
    AllowTabInput,
    CtrlEnterForNewLine,
    NoHorizontalScroll,
    AlwaysOverwrite,
    ReadOnly,
    Password,
    NoUndoRedo,
    CharsScientific,
    CallbackResize,
    CallbackEdit,
    EscapeClearsAll,
  }

  enum TreeNodeFlags {
    None,
    Selected,
    Framed,
    AllowItemOverlap,
    NoTreePushOnOpen,
    NoAutoOpenOnLog,
    DefaultOpen,
    OpenOnDoubleClick,
    OpenOnArrow,
    Leaf,
    Bullet,
    FramePadding,
    SpanAvailWidth,
    SpanFullWidth,
    NavLeftJumpsBackHere,
    CollapsingHeader,
  }

  enum PopupFlags {
    None,
    MouseButtonLeft,
    MouseButtonRight,
    MouseButtonMiddle,
    MouseButtonMask_,
    MouseButtonDefault_,
    NoOpenOverExistingPopup,
    NoOpenOverItems,
    AnyPopupId,
    AnyPopupLevel,
    AnyPopup,
  }

  enum SelectableFlags {
    None,
    DontClosePopups,
    SpanAllColumns,
    AllowDoubleClick,
    Disabled,
    AllowItemOverlap,
  }

  enum ComboFlags {
    None,
    PopupAlignLeft,
    HeightSmall,
    HeightRegular,
    HeightLarge,
    HeightLargest,
    NoArrowButton,
    NoPreview,
    HeightMask_,
  }

  enum TabBarFlags {
    None,
    Reorderable,
    AutoSelectNewTabs,
    TabListPopupButton,
    NoCloseWithMiddleMouseButton,
    NoTabListScrollingButtons,
    NoTooltip,
    FittingPolicyResizeDown,
    FittingPolicyScroll,
    FittingPolicyMask_,
    FittingPolicyDefault_,
  }

  enum TabItemFlags {
    None,
    UnsavedDocument,
    SetSelected,
    NoCloseWithMiddleMouseButton,
    NoPushId,
    NoTooltip,
    NoReorder,
    Leading,
    Trailing,
  }

  enum TableFlags {
    None,
    Resizable,
    Reorderable,
    Hideable,
    Sortable,
    NoSavedSettings,
    ContextMenuInBody,
    RowBg,
    BordersInnerH,
    BordersOuterH,
    BordersInnerV,
    BordersOuterV,
    BordersH,
    BordersV,
    BordersInner,
    BordersOuter,
    Borders,
    NoBordersInBody,
    NoBordersInBodyUntilResize,
    SizingFixedFit,
    SizingFixedSame,
    SizingStretchProp,
    SizingStretchSame,
    NoHostExtendX,
    NoHostExtendY,
    NoKeepColumnsVisible,
    PreciseWidths,
    NoClip,
    PadOuterX,
    NoPadOuterX,
    NoPadInnerX,
    ScrollX,
    ScrollY,
    SortMulti,
    SortTristate,
  }

  enum TableColumnFlags {
    None,
    Disabled,
    DefaultHide,
    DefaultSort,
    WidthStretch,
    WidthFixed,
    NoResize,
    NoReorder,
    NoHide,
    NoClip,
    NoSort,
    NoSortAscending,
    NoSortDescending,
    NoHeaderLabel,
    NoHeaderWidth,
    PreferSortAscending,
    PreferSortDescending,
    IndentEnable,
    IndentDisable,
    IsEnabled,
    IsVisible,
    IsSorted,
    IsHovered,
    WidthMask_,
    IndentMask_,
    StatusMask_,
    NoDirectResize_,
  }

  enum TableRowFlags {
    None,
    Headers,
  }

  enum TableBgTarget {
    None,
    RowBg0,
    RowBg1,
    CellBg,
  }

  enum FocusedFlags {
    None,
    ChildWindows,
    RootWindow,
    AnyWindow,
    NoPopupHierarchy,
    RootAndChildWindows,
  }

  enum HoveredFlags {
    None,
    ChildWindows,
    RootWindow,
    AnyWindow,
    NoPopupHierarchy,
    AllowWhenBlockedByPopup,
    AllowWhenBlockedByActiveItem,
    AllowWhenOverlapped,
    AllowWhenDisabled,
    NoNavOverride,
    RectOnly,
    RootAndChildWindows,
    DelayNormal,
    DelayShort,
    NoSharedDelay,
  }

  enum DragDropFlags {
    None,
    SourceNoPreviewTooltip,
    SourceNoDisableHover,
    SourceNoHoldToOpenOthers,
    SourceAllowNullID,
    SourceExtern,
    SourceAutoExpirePayload,
    AcceptBeforeDelivery,
    AcceptNoDrawDefaultRect,
    AcceptNoPreviewTooltip,
    AcceptPeekOnly,
  }

  enum Dir {
    None,
    Left,
    Right,
    Up,
    Down,
  }

  enum SortDirection {
    None,
    Ascending,
    Descending,
  }

  enum Key {
    None,
    Tab,
    LeftArrow,
    RightArrow,
    UpArrow,
    DownArrow,
    PageUp,
    PageDown,
    Home,
    End,
    Insert,
    Delete,
    Backspace,
    Space,
    Enter,
    Escape,
    LeftCtrl,
    LeftShift,
    LeftAlt,
    LeftSuper,
    RightCtrl,
    RightShift,
    RightAlt,
    RightSuper,
    Menu,
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7,
    F8,
    F9,
    F10,
    F11,
    F12,
    Apostrophe,
    Comma,
    Minus,
    Period,
    Slash,
    Semicolon,
    Equal,
    LeftBracket,
    Backslash,
    RightBracket,
    GraveAccent,
    CapsLock,
    ScrollLock,
    NumLock,
    PrintScreen,
    Pause,
    Keypad0,
    Keypad1,
    Keypad2,
    Keypad3,
    Keypad4,
    Keypad5,
    Keypad6,
    Keypad7,
    Keypad8,
    Keypad9,
    KeypadDecimal,
    KeypadDivide,
    KeypadMultiply,
    KeypadSubtract,
    KeypadAdd,
    KeypadEnter,
    KeypadEqual,
    GamepadStart,
    GamepadBack,
    GamepadFaceLeft,
    GamepadFaceRight,
    GamepadFaceUp,
    GamepadFaceDown,
    GamepadDpadLeft,
    GamepadDpadRight,
    GamepadDpadUp,
    GamepadDpadDown,
    GamepadL1,
    GamepadR1,
    GamepadL2,
    GamepadR2,
    GamepadL3,
    GamepadR3,
    GamepadLStickLeft,
    GamepadLStickRight,
    GamepadLStickUp,
    GamepadLStickDown,
    GamepadRStickLeft,
    GamepadRStickRight,
    GamepadRStickUp,
    GamepadRStickDown,
    MouseLeft,
    MouseRight,
    MouseMiddle,
    MouseX1,
    MouseX2,
    MouseWheelX,
    MouseWheelY,
  }

  enum Mod {
    None,
    Ctrl,
    Shift,
    Alt,
    Super,
    Shortcut,
    Mask_,
    ModCtrl,
    ModShift,
    ModAlt,
    ModSuper,
    KeyPadEnter,
  }

  enum ConfigFlags {
    None,
    NavEnableKeyboard,
    NavEnableGamepad,
    NavEnableSetMousePos,
    NavNoCaptureKeyboard,
    NoMouse,
    NoMouseCursorChange,
    IsSRGB,
    IsTouchScreen,
  }

  enum BackendFlags {
    None,
    HasGamepad,
    HasMouseCursors,
    HasSetMousePos,
    RendererHasVtxOffset,
  }

  enum Col {
    Text,
    TextDisabled,
    WindowBg,
    ChildBg,
    PopupBg,
    Border,
    BorderShadow,
    FrameBg,
    FrameBgHovered,
    FrameBgActive,
    TitleBg,
    TitleBgActive,
    TitleBgCollapsed,
    MenuBarBg,
    ScrollbarBg,
    ScrollbarGrab,
    ScrollbarGrabHovered,
    ScrollbarGrabActive,
    CheckMark,
    SliderGrab,
    SliderGrabActive,
    Button,
    ButtonHovered,
    ButtonActive,
    Header,
    HeaderHovered,
    HeaderActive,
    Separator,
    SeparatorHovered,
    SeparatorActive,
    ResizeGrip,
    ResizeGripHovered,
    ResizeGripActive,
    Tab,
    TabHovered,
    TabActive,
    TabUnfocused,
    TabUnfocusedActive,
    PlotLines,
    PlotLinesHovered,
    PlotHistogram,
    PlotHistogramHovered,
    TableHeaderBg,
    TableBorderStrong,
    TableBorderLight,
    TableRowBg,
    TableRowBgAlt,
    TextSelectedBg,
    DragDropTarget,
    NavHighlight,
    NavWindowingHighlight,
    NavWindowingDimBg,
    ModalWindowDimBg,
  }

  enum StyleVar {
    Alpha,
    DisabledAlpha,
    WindowPadding,
    WindowRounding,
    WindowBorderSize,
    WindowMinSize,
    WindowTitleAlign,
    ChildRounding,
    ChildBorderSize,
    PopupRounding,
    PopupBorderSize,
    FramePadding,
    FrameRounding,
    FrameBorderSize,
    ItemSpacing,
    ItemInnerSpacing,
    IndentSpacing,
    CellPadding,
    ScrollbarSize,
    ScrollbarRounding,
    GrabMinSize,
    GrabRounding,
    TabRounding,
    ButtonTextAlign,
    SelectableTextAlign,
    SeparatorTextBorderSize,
    SeparatorTextAlign,
    SeparatorTextPadding,
  }

  enum ButtonFlags {
    None,
    MouseButtonLeft,
    MouseButtonRight,
    MouseButtonMiddle,
  }

  enum ColorEditFlags {
    None,
    NoAlpha,
    NoPicker,
    NoOptions,
    NoSmallPreview,
    NoInputs,
    NoTooltip,
    NoLabel,
    NoSidePreview,
    NoDragDrop,
    NoBorder,
    AlphaBar,
    AlphaPreview,
    AlphaPreviewHalf,
    HDR,
    DisplayRGB,
    DisplayHSV,
    DisplayHex,
    Uint8,
    Float,
    PickerHueBar,
    PickerHueWheel,
    InputRGB,
    InputHSV,
    DefaultOptions_,
  }

  enum SliderFlags {
    None,
    AlwaysClamp,
    Logarithmic,
    NoRoundToFormat,
    NoInput,
    InvalidMask_,
  }

  enum MouseButton {
    Left,
    Right,
    Middle,
  }

  enum MouseCursor {
    None,
    Arrow,
    TextInput,
    ResizeAll,
    ResizeNS,
    ResizeEW,
    ResizeNESW,
    ResizeNWSE,
    Hand,
    NotAllowed,
  }

  enum MouseSource {
    Mouse,
    TouchScreen,
    Pen,
  }

  enum Cond {
    None,
    Always,
    Once,
    FirstUseEver,
    Appearing,
  }

  //-----------------------------------------------------------------------------
  // Windows
  //-----------------------------------------------------------------------------

  // IMPORTANT: calls to begin(...) needs a matching end() call, no matter what begin(...) returns
  function begin(name: String, open?: ImBool, flags?: WindowFlags): bool;
  function end(): void;

  //-----------------------------------------------------------------------------
  // Child Windows
  //-----------------------------------------------------------------------------

  // IMPORTANT: calls to beginChild(...) needs a matching endChild() call, no matter what beginChild(...) returns
  function beginChild(name: String, size?: ImVec2, border?: boolean, flags?: WindowFlags): bool;
  function endChild(): void;

  //-----------------------------------------------------------------------------
  // Windows Utilities
  //-----------------------------------------------------------------------------

  function isWindowAppearing(): boolean;
  function isWindowCollapsed(): boolean;
  function isWindowFocused(flags?: FocusedFlags): boolean;
  function isWindowHovered(flags?: HoveredFlags): boolean;
  function getWindowPos(): ImVec2;
  function getWindowSize(): ImVec2;
  function getWindowWidth(): number;
  function getWindowHeight(): number;

  //-----------------------------------------------------------------------------
  // Windows Manipulation
  //-----------------------------------------------------------------------------

  function setNextWindowPos(pos: ImVec2, cond?: Cond, pivot?: ImVec2): void;
  function setNextWindowSize(size: ImVec2, cond?: Cond): void;
  function setNextWindowConstraints(sizeMin: ImVec2, sizeMax: ImVec2): void;
  function setNextWindowContentSize(size: ImVec2): void;
  function setNextWindowCollapsed(collapsed: boolean, cond: Cond): void;
  function setNextWindowFocus(): void;
  function setNextWindowScroll(scroll: ImVec2): void;
  function setNextWindowBgAlpha(alpha: number): void;
  function setWindowPos(pos: ImVec2, cond?: Cond): void;
  function setWindowPos(name: string, pos: ImVec2, cond?: number): void;
  function setWindowSize(size: ImVec2, cond?: Cond): void;
  function setWindowSize(name: string, size: ImVec2, cond?: Cond): void;
  function setWindowCollapsed(collapsed: boolean, cond?: Cond): void;
  function setWindowCollapsed(name: string, collapsed: boolean, cond?: Cond): void;
  function setWindowFocus(name: string): void;
  function setFontScale(scale: number): void;

  //-----------------------------------------------------------------------------
  // Content Region
  //-----------------------------------------------------------------------------

  function getContentRegionAvail(): ImVec2;
  function getContentRegionMax(): ImVec2;
  function getWindowContentRegionMin(): ImVec2;
  function getWindowContentRegionMax(): ImVec2;

  //-----------------------------------------------------------------------------
  // Windows Scrolling
  //-----------------------------------------------------------------------------

  function getScrollX(): number;
  function getScrollY(): number;
  function setScrollX(scrollX: number): void;
  function setScrollY(scrollY: number): void;
  function getScrollMaxX(): number;
  function getScrollMaxY(): number;
  function setScrollHereX(centerXRatio?: number): void;
  function setScrollHereY(centerYRatio?: number): void;
  function setScrollFromPosX(localX: number, centerXRatio?: number): void;
  function setScrollFromPosY(localY: number, centerYRatio?: number): void;

  //-----------------------------------------------------------------------------
  // Parameters stacks (shared)
  //-----------------------------------------------------------------------------

  function pushStyleColor(idx: Col, col: number): void;
  function pushStyleColor(idx: Col, col: ImVec4): void;
  function popStyleColor(count: number): void;
  function pushStyleVar(idx: StyleVar, val: number): void;
  function pushStyleVar(idx: StyleVar, val: ImVec2): void;
  function popStyleVar(count: number): void;
  function pushTabStop(tab_stop: boolean): void;
  function popTabStop(): void;
  function pushButtonRepeat(repeat: boolean): void;
  function popButtonRepeat(): void;

  //-----------------------------------------------------------------------------
  // Parameters stacks (current window)
  //-----------------------------------------------------------------------------

  function pushItemWidth(itemWidth: number): void;
  function popItemWidth(): void;
  function setNextItemWidth(itemWidth: number): void;
  function calcItemWidth(): number;
  function pushTextWrapPos(wrapLocalPosX: number): void;
  function popTextWrapPos(): void;

  //-----------------------------------------------------------------------------
  // Style read access
  //-----------------------------------------------------------------------------

  function getFontSize(): number;
  function getFontTexUvWhitePixel(): ImVec2;
  function getColorU32(idx: Col, alpha_mul?: number): number;
  function getColorU32(col: ImVec4): number;
  function getStyleColorVec4(idx: Col): ImVec4;

  //-----------------------------------------------------------------------------
  // Cursor / Layout
  //-----------------------------------------------------------------------------

  function separator(): void;
  function sameLine(offsetFromStartX?: number, spacing?: number): void;
  function newLine(): void;
  function spacing(): void;
  function dummy(size: ImVec2): void;
  function indent(indentWidth: number): void;
  function unindent(indentWidth: number): void;
  function beginGroup(): void;
  function endGroup(): void;
  function getCursorPos(): ImVec2;
  function getCursorPosX(): number;
  function getCursorPosY(): number;
  function setCursorPos(localPos: ImVec2): void;
  function setCursorPosX(localX: number): void;
  function setCursorPosY(localY: number): void;
  function getCursorStartPos(): ImVec2;
  function getCursorScreenPos(): ImVec2;
  function setCursorScreenPos(pos: ImVec2): void;
  function alignTextToFramePadding(): void;
  function getTextLineHeight(): number;
  function getTextLineHeightWithSpacing(): number;
  function getFrameHeight(): number;
  function getFrameHeightWithSpacing(): number;

  //-----------------------------------------------------------------------------
  // ID stack/scopes
  //-----------------------------------------------------------------------------

  function pushID(str_id: string): number;
  function pushID(int_id: number): number;
  function popID(): void;
  function getID(str_id: string): number;

  //-----------------------------------------------------------------------------
  // Widgets: Text
  //-----------------------------------------------------------------------------

  function text(fmt: string): void;
  function textColored(col: ImVec4, fmt: string): void;
  function textDisabled(fmt: string): void;
  function textWrapped(fmt: string): void;
  function labelText(label: string, fmt: string): void;
  function bulletText(fmt: string): void;
  function separatorText(label: string): void;

  //-----------------------------------------------------------------------------
  // Widgets: Main
  //-----------------------------------------------------------------------------

  function button(label: string, size?: ImVec2): boolean;
  function smallButton(label: string): boolean;
  function invisibleButton(str_id: string, size?: ImVec2, flags?: ButtonFlags): boolean;
  function arrowButton(str_id: string, dir?: Dir): boolean;
  function checkbox(str_id: string, v: ImBool | boolean): boolean;
  function radioButton(str_id: string, active: boolean): boolean;
  function progressBar(fraction: number, size_arg?: ImVec2, overlay?: string): void;
  function bullet(): void;

  //-----------------------------------------------------------------------------
  // Widgets: Combo Box (Dropdown)
  //-----------------------------------------------------------------------------

  function beginCombo(label: string, preview_value: string, flags?: ComboFlags): boolean;
  function endCombo(): void;
  function combo(label: string, currentItem: ImInt, items: Array<string>, popupMaxHeightInItems?: number): boolean;

  //-----------------------------------------------------------------------------
  // Widgets: Drag Sliders
  //-----------------------------------------------------------------------------

  function dragFloat(label: string, v: ImFloat | Array<ImFloat>, vSpeed?: number, vMin?: number, vMax?: number, format?: string, flags?: SliderFlags): boolean;
  function dragFloatRange2(label: string, vCurrentMin: ImFloat, vCurrentMax: ImFloat, vSpeed?: number, vMin?: number, vMax?: number, format?: string, flags?: SliderFlags): boolean;
  function dragInt(label: string, v: ImInt | Array<ImInt>, vSpeed?: number, vMin?: number, vMax?: number, format?: string, flags?: SliderFlags): boolean;
  function dragIntRange2(label: string, vCurrentMin: ImInt, vCurrentMax: ImInt, vSpeed?: number, vMin?: number, vMax?: number, format?: string, flags?: SliderFlags): boolean;

  //-----------------------------------------------------------------------------
  // Widgets: Regular Sliders
  //-----------------------------------------------------------------------------

  function sliderFloat(label: string, v: ImFloat | Array<ImFloat>, vMin: number, vMax: number, format?: string, flags?: SliderFlags): boolean;
  function sliderAngle(label: string, vRad: ImFloat, vDegreesMin?: number, vDegreesMax: number, format?: string, flags?: SliderFlags): boolean;
  function sliderInt(label: string, v: ImInt | Array<ImInt>, vMin: number, vMax: number, format?: string, flags?: SliderFlags): boolean;
  function vSliderFloat(label: string, size: ImVec2, v: ImFloat, vMin: number, vMax: number, format?: string, flags?: SliderFlags): boolean;
  function vSliderInt(label: string, size: ImVec2, v: ImInt, vMin: number, vMax: number, format?: string, flags?: SliderFlags): boolean;

  //-----------------------------------------------------------------------------
  // Widgets: Input with Keyboard
  //-----------------------------------------------------------------------------

  function inputText(label: string, text: ImString, flags?: InputTextFlags): boolean;
  function inputTextMultiline(label: string, text: ImString, size?: ImVec2, flags?: InputTextFlags): boolean;
  function inputTextWithHint(label: string, hint: string, text: ImString, flags?: InputTextFlags): boolean;
  function inputFloat(label: string, v: ImFloat | Array<ImFloat>, step: number, step_fast: number, format?: string, flags?: InputTextFlags): boolean;
  function inputInt(label: string, v: ImInt | Array<ImInt>, step: number, step_fast: number, flags?: InputTextFlags): boolean;

  //-----------------------------------------------------------------------------
  // Widgets: Color Editor/Picker
  //-----------------------------------------------------------------------------

  function colorEdit4(label: string, col: ImVec4, flags?: ColorEditFlags): boolean;
  function colorPicker4(label: string, col: ImVec4, flags?: ColorEditFlags, ref_col?: ImVec4): boolean;
  function colorButton(label: string, col: ImVec4, flags?: ColorEditFlags, size?: ImVec2): boolean;
  function setColorEditOptions(flags: ColorEditFlags): void;

  //-----------------------------------------------------------------------------
  // Widgets: Trees
  //-----------------------------------------------------------------------------

  function treeNode(label: string, fmt?: string): boolean;
  function treeNodeEx(label: string, flags?: TreeNodeFlags, fmt?: string): boolean;
  function treePush(str_id: string): void;
  function treePop(): void;
  function getTreeNodeToLabelSpacing(): number;
  function collapsingHeader(label: string, flags?: TreeNodeFlags): boolean;
  function collapsingHeader(label: string, visible: ImBool, flags?: TreeNodeFlags): boolean;
  function setNextItemOpen(isOpen: boolean, cond?: Cond): void;

  //-----------------------------------------------------------------------------
  // Widgets: Selectables
  //-----------------------------------------------------------------------------

  function selectable(label: string, selected: ImBool | boolean, flags?: SelectableFlags): boolean;

  //-----------------------------------------------------------------------------
  // Widgets: List Boxes
  //-----------------------------------------------------------------------------

  function beginListBox(label: string, size?: ImVec2): boolean;
  function endListBox(): void;
  function listBox(label: string, currentItem: ImInt, items: Array<string>, heightInItems?: number): boolean;

  //-----------------------------------------------------------------------------
  // Widgets: Menus
  //-----------------------------------------------------------------------------

  function beginMenuBar(): boolean;
  function endMenuBar(): void;
  function beginMainMenuBar(): boolean;
  function endMainMenuBar(): void;
  function beginMenu(label: string, enabled?: boolean): boolean;
  function endMenu(): void;
  function menuItem(label: string, shortcut?: string, selected?: ImBool, enabled?: boolean): boolean;

  //-----------------------------------------------------------------------------
  // Tooltips
  //-----------------------------------------------------------------------------

  function beginTooltip(): boolean;
  function endTooltip(): void;
  function setTooltip(text: string): void;

  //-----------------------------------------------------------------------------
  // Popups, Modals
  //-----------------------------------------------------------------------------

  function beginPopup(strId: string, flags?: WindowFlags): boolean;
  function beginPopupModal(name: string, open?: ImBool, flags?: WindowFlags): boolean;
  function endPopup(): void;

  //-----------------------------------------------------------------------------
  // Popups: open/close functions
  //-----------------------------------------------------------------------------

  function openPopup(id: string | number, popupFlags?: PopupFlags): void;
  function openPopupOnItemClick(strId?: string, popupFlags?: PopupFlags): void;
  function closeCurrentPopup(): void;

  //-----------------------------------------------------------------------------
  // Popups: open+begin combined functions helpers
  //-----------------------------------------------------------------------------

  function beginPopupContextItem(strId?: string, popupFlags?: PopupFlags): boolean;
  function beginPopupContextWindow(strId?: string, popupFlags?: PopupFlags): boolean;
  function beginPopupContextVoid(strId?: string, popupFlags?: PopupFlags): boolean;

  //-----------------------------------------------------------------------------
  // Popups: query functions
  //-----------------------------------------------------------------------------

  function isPopupOpen(strId: string, flags?: PopupFlags): boolean;

  //-----------------------------------------------------------------------------
  // Tables
  //-----------------------------------------------------------------------------

  function beginTable(strId: string, column: number, outerSize?: ImVec2, innerWidth?: number): boolean;
  function endTable(): void;
  function tableNextRow(rowFlags?: TableRowFlags, minRowHeight?: number): void;
  function tableNextColumn(): boolean;
  function tableSetColumnIndex(columnN: number): boolean;

  //-----------------------------------------------------------------------------
  // Tables: Headers & Columns declaration
  //-----------------------------------------------------------------------------

  function tableSetupColumn(label: string, flags?: TableColumnFlags, initWidthOrHeight?: number, userId?: number): void;
  function tableSetupScrollFreeze(cols: number, rows: number): void;
  function tableHeadersRow(): void;
  function tableHeader(label: string): void;

  //-----------------------------------------------------------------------------
  // Tables: Sorting & Miscellaneous functions
  //-----------------------------------------------------------------------------

  function tableGetColumnCount(): number;
  function tableGetColumnIndex(): number;
  function tableGetRowIndex(): number;
  function tableGetColumnName(column?: number): string;
  function tableGetColumnFlags(column?: number): TableColumnFlags;
  function tableSetColumnEnabled(column: number, v: boolean): void;
  function tableSetBgColor(target: TableBgTarget, color: number, column?: number): void;

  //-----------------------------------------------------------------------------
  // Legacy Columns API (prefer using Tables!)
  //-----------------------------------------------------------------------------

  function columns(count?: number, id?: string, border?: boolean): void;
  function nextColumn(): void;
  function getColumnIndex(): number;
  function getColumnWidth(columnIndex?: number): number;
  function setColumnWidth(columnIndex: number, width: number): void;
  function getColumnOffset(columnIndex?: number): number;
  function setColumnOffset(columnIndex: number, offsetX: number): void;
  function getColumnsCount(): number;

  //-----------------------------------------------------------------------------
  // Tab Bars, Tabs
  //-----------------------------------------------------------------------------

  function beginTabBar(strId: string, flags?: TabBarFlags): boolean
  function endTabBar(): void;
  function beginTabItem(label: string, open?: ImBool, flags?: TabItemFlags): boolean
  function endTabItem(): void;
  function tabItemButton(label: string, flags?: TabItemFlags): boolean
  function setTabItemClosed(tabOrDockedWindowLabel: string): void

  //-----------------------------------------------------------------------------
  // Focus, Activation
  //-----------------------------------------------------------------------------

  function setItemDefaultFocus(): void;
  function setKeyboardFocusHere(offset?: number): void;

  //-----------------------------------------------------------------------------
  // Item/Widgets Utilities and Query Functions
  //-----------------------------------------------------------------------------

  function isItemHovered(flags?: HoveredFlags): boolean;
  function isItemActive(): boolean;
  function isItemFocused(): boolean;
  function isItemClicked(flags?: MouseButton): boolean;
  function isItemVisible(): boolean;
  function isItemEdited(): boolean;
  function isItemActivated(): boolean;
  function isItemDeactivated(): boolean;
  function isItemDeactivatedAfterEdit(): boolean;
  function isItemToggledOpen(): boolean;
  function isAnyItemHovered(): boolean;
  function isAnyItemActive(): boolean;
  function isAnyItemFocused(): boolean;
  function getItemID(): number;
  function getItemRectMin(): ImVec2;
  function getItemRectMax(): ImVec2;
  function getItemRectSize(): ImVec2;
  function setItemAllowOverlap(): void;

  //-----------------------------------------------------------------------------
  // Inputs Utilities: Keyboard/Mouse/Gamepad
  //-----------------------------------------------------------------------------

  function isKeyDown(key: Key): boolean;
  function isKeyPressed(key: Key): boolean;
  function isKeyReleased(key: Key): boolean;
  function getKeyPressedAmount(key: Key, repeatDelay: number, rate: number): number;
  function getKeyName(key: Key): string;
  function setNextFrameWantCaptureKeyboard(wantCaptureKeyboard: boolean): void;

  //-----------------------------------------------------------------------------
  // Inputs Utilities: Mouse specific
  //-----------------------------------------------------------------------------

  function isMouseDown(button: MouseButton): boolean;
  function isMouseClicked(button: MouseButton, repeat?: boolean): boolean;
  function isMouseReleased(button: MouseButton): boolean;
  function isMouseDoubleClicked(button: MouseButton): boolean;
  function isMouseClickedCount(button: MouseButton): number;
  function isMouseHoveringRect(rectMin: ImVec2, rectMax: ImVec2, clip?: boolean): boolean;
  function isMousePosValid(mousePos?: ImVec2): boolean;
  function isAnyMouseDown(): boolean;
  function getMousePos(): ImVec2;
  function getMousePosOnOpeningCurrentPopup(): ImVec2;
  function isMouseDragging(button: MouseButton, lockThreshold?: number): boolean;
  function getMouseDragDelta(button?: MouseButton, lockThreshold?: number): ImVec2;
  function resetMouseDragDelta(button?: MouseButton): void;
  function getMouseCursor(): MouseCursor;
  function setMouseCursor(cursorType: MouseCursor): void;
  function setNextFrameWantCaptureMouse(wantCaptureMouse: boolean): void;

  //-----------------------------------------------------------------------------
  // Clipboard Utilities
  //-----------------------------------------------------------------------------

  function getClipboardText(): string;
  function setClipboardText(text: string): void;

  //-----------------------------------------------------------------------------
  // Viewports
  //-----------------------------------------------------------------------------

  function getMainViewport(): Viewport;

  //-----------------------------------------------------------------------------
  // Miscellaneous Utilities
  //-----------------------------------------------------------------------------

  function isRectVisible(size: ImVec2): boolean;
  function isRectVisible(rectMin: ImVec2, rectMax: ImVec2): boolean;
  function getTime(): number;
  function getFrameCount(): number;
  function getStyleColorName(idx: Col): string;

  //-----------------------------------------------------------------------------
  // Text Utilities
  //-----------------------------------------------------------------------------

  function calcTextSize(text: string, hideTextAfterDoubleHash?: boolean, wrapWidth?: number): ImVec2;

  //-----------------------------------------------------------------------------
  // Color Utilities
  //-----------------------------------------------------------------------------

  function colorConvertU32ToFloat4(col: number): ImVec4;
  function colorConvertFloat4ToU32(col: ImVec4): number;
}
