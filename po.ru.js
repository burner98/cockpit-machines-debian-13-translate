cockpit.locale({
 "": {
  "plural-forms": (n) => n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2,
  "language": "ru",
  "language-direction": "ltr"
 },
 " excluding ": [
  null,
  ""
 ],
 "$0 $1 available at default location": [
  null,
  "$0 $1 доступен в месте по умолчанию"
 ],
 "$0 $1 available on host": [
  null,
  "$0 $1 доступен на хосте"
 ],
 "$0 CPU details": [
  null,
  "Сведения о ЦП $0"
 ],
 "$0 Network": [
  null,
  "$0 сеть",
  "$0 сети",
  "$0 сетей"
 ],
 "$0 Storage pool": [
  null,
  "$0 буфер устройств хранения",
  "$0 буфера устройств хранения",
  "$0 буферов устройств хранения"
 ],
 "$0 does not support unattended installation.": [
  null,
  "$0 не поддерживает автоматическую установку."
 ],
 "$0 memory adjustment": [
  null,
  "Корректирование памяти $0"
 ],
 "$0 network": [
  null,
  "$0 сеть"
 ],
 "$0 vCPU": [
  null,
  "$0 Вирт. процессор",
  "$0 Вирт. процессора",
  "$0 Вирт. процессоров"
 ],
 "$0 virtual network interface settings": [
  null,
  "Параметры виртуального сетевого интерфейса $0"
 ],
 "(empty)": [
  null,
  ""
 ],
 "A copy of the VM will run on the destination and will disappear when it is shut off. Meanwhile, the origin host keeps its copy of the VM configuration.": [
  null,
  "Копия виртуальной машины будет запущена на целевом компьютере и исчезнет при его отключении. При этом исходный хост сохранит свою копию конфигурации виртуальной машины."
 ],
 "Access": [
  null,
  "Доступ"
 ],
 "Action": [
  null,
  "Действие"
 ],
 "Actions": [
  null,
  "Действия"
 ],
 "Activate": [
  null,
  "Включить"
 ],
 "Activate the storage pool to administer volumes": [
  null,
  "Активировать пул хранения для администрирования томов"
 ],
 "Add": [
  null,
  "Добавить"
 ],
 "Add SSH keys": [
  null,
  "Добавить SSH-ключи"
 ],
 "Add TPM": [
  null,
  "Добавить модуль TPM"
 ],
 "Add VNC": [
  null,
  "Добавить VNC"
 ],
 "Add a DHCP static host entry": [
  null,
  "Добавить статическую запись хоста DHCP"
 ],
 "Add disk": [
  null,
  "Добавить диск"
 ],
 "Add host device": [
  null,
  "Добавить хост-устройство"
 ],
 "Add network interface": [
  null,
  "Добавить сетевой интерфейс"
 ],
 "Add serial console": [
  null,
  "Добавить последовательную консоль"
 ],
 "Add shared directory": [
  null,
  "Добавить общий каталог"
 ],
 "Add virtual network interface": [
  null,
  "Добавление виртуального сетевого интерфейса"
 ],
 "Add vsock interface": [
  null,
  "Добавить интерфейс vsock"
 ],
 "Adding a watchdog will require a reboot to take effect.": [
  null,
  ""
 ],
 "Adding shared directories is possible only when the guest is shut off": [
  null,
  "Добавление общих каталогов возможно только при выключенном госте"
 ],
 "Address": [
  null,
  "Адрес"
 ],
 "Address not within subnet": [
  null,
  "Адрес должен находиться в диапазоне адресов подсети"
 ],
 "Advanced interface type for high performance or enhanced security.": [
  null,
  ""
 ],
 "All": [
  null,
  "Все"
 ],
 "All VM activity, including storage, will be temporary. This will result in data loss on the destination host.": [
  null,
  ""
 ],
 "Allowed characters: basic Latin alphabet, numbers, and limited punctuation (-, _, +, .)": [
  null,
  ""
 ],
 "Also delete all volumes inside this pool:": [
  null,
  "Также удалить все тома внутри этого пула:"
 ],
 "Always attach": [
  null,
  "Всегда присоединять"
 ],
 "An example of vsock-aware software is socat": [
  null,
  ""
 ],
 "Apply": [
  null,
  "Применить"
 ],
 "Apply on next boot": [
  null,
  "Применить при следующей загрузке"
 ],
 "Arguments passed to the booted kernel can often be used to control the installer. Refer to the documentation of the installer of $0.": [
  null,
  ""
 ],
 "Automated installs are only available when downloading an image, an install tree or using cloud-init.": [
  null,
  ""
 ],
 "Automatic": [
  null,
  "Автоматически"
 ],
 "Autostart": [
  null,
  "Автозапуск"
 ],
 "Backend": [
  null,
  ""
 ],
 "Base System Peripheral": [
  null,
  ""
 ],
 "Blocked": [
  null,
  "Заблокировано"
 ],
 "Boot arguments": [
  null,
  ""
 ],
 "Boot order": [
  null,
  "Порядок загрузки"
 ],
 "Boot order settings could not be saved": [
  null,
  "Не удалось сохранить параметры порядка загрузки"
 ],
 "Bus": [
  null,
  "Шина"
 ],
 "CD/DVD disc": [
  null,
  "Диск CD/DVD"
 ],
 "CPU": [
  null,
  "ЦП"
 ],
 "Cache": [
  null,
  "Кэш"
 ],
 "Can not determine guest device name": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Отмена"
 ],
 "Cannot edit vsock device on a transient VM": [
  null,
  ""
 ],
 "Cannot edit watchdog device on a transient VM": [
  null,
  ""
 ],
 "Change firmware": [
  null,
  "Изменить микропрограмму"
 ],
 "Changes pending": [
  null,
  ""
 ],
 "Changes will take effect after shutting down the VM": [
  null,
  "Изменения вступят в силу после выключения виртуальной машины"
 ],
 "Changing BIOS/EFI settings is specific to each manufacturer. It involves pressing a hotkey during boot (ESC, F1, F12, Del). Enable a setting called \"virtualization\", \"VM\", \"VMX\", \"SVM\", \"VTX\", \"VTD\". Consult your computer's manual for details.": [
  null,
  ""
 ],
 "Checking token validity...": [
  null,
  ""
 ],
 "Choose an operating system": [
  null,
  "Выберите операционную систему"
 ],
 "Class": [
  null,
  ""
 ],
 "Clone": [
  null,
  "Клонировать"
 ],
 "Close": [
  null,
  "Закрыть"
 ],
 "Cloud base image": [
  null,
  "Базовый образ облака"
 ],
 "Co-Processor": [
  null,
  ""
 ],
 "Complex rule \"$0\" can not be edited here.": [
  null,
  ""
 ],
 "Compress": [
  null,
  ""
 ],
 "Concurrently writeable": [
  null,
  ""
 ],
 "Confirm this action": [
  null,
  "Подтвердите это действие"
 ],
 "Connect": [
  null,
  "Подключиться"
 ],
 "Connection": [
  null,
  "Подключение"
 ],
 "Console": [
  null,
  "Консоль"
 ],
 "Convert QXL video card to VGA": [
  null,
  ""
 ],
 "Convert SPICE graphics console to VNC": [
  null,
  ""
 ],
 "Copy to clipboard": [
  null,
  "Копировать в буфер обмена"
 ],
 "Cores per socket": [
  null,
  "Количество ядер на сокет"
 ],
 "Could not dynamically add watchdog": [
  null,
  ""
 ],
 "Could not revert to snapshot": [
  null,
  "Не удалось вернуться к снимку"
 ],
 "Crashed": [
  null,
  "Аварийное завершение"
 ],
 "Create": [
  null,
  "Создать"
 ],
 "Create VM": [
  null,
  "Создать ВМ"
 ],
 "Create VM by importing a disk image of an existing VM installation": [
  null,
  ""
 ],
 "Create VM from local or network installation medium": [
  null,
  ""
 ],
 "Create a clone VM based on $0": [
  null,
  "Создать клон ВМ на основе $0"
 ],
 "Create new": [
  null,
  "Создать новый"
 ],
 "Create new virtual machine": [
  null,
  "Создание новой виртуальной машины"
 ],
 "Create snapshot": [
  null,
  "Создание моментального снимка"
 ],
 "Create storage pool": [
  null,
  "Создать пул носителей"
 ],
 "Create storage volume": [
  null,
  "Создание тома хранилища"
 ],
 "Create virtual network": [
  null,
  "Создать виртуальную сеть"
 ],
 "Create volume": [
  null,
  "Создать том"
 ],
 "Creating VM": [
  null,
  "Создание ВМ"
 ],
 "Creating snapshots of VMs with VFIO devices is not supported while they are running.": [
  null,
  ""
 ],
 "Creation of VM $0 failed": [
  null,
  "Ошибка создания виртуальной машины $0"
 ],
 "Creation time": [
  null,
  "Время создания"
 ],
 "Ctrl+Alt+$0": [
  null,
  "Ctrl+Alt+$0"
 ],
 "Current": [
  null,
  "Текущий"
 ],
 "Current allocation": [
  null,
  "Текущее распределение"
 ],
 "Custom firmware: $0": [
  null,
  "Специализированная микропрограмма: $0"
 ],
 "Custom path": [
  null,
  "Пользовательский путь"
 ],
 "Deactivate": [
  null,
  "Отключить"
 ],
 "Delete": [
  null,
  "Удалить"
 ],
 "Delete $0 volume": [
  null,
  "Удалить $0 том",
  "Удалить $0 тома",
  "Удалить $0 томов"
 ],
 "Delete associated storage files:": [
  null,
  "Удаление связанных файлов хранилища:"
 ],
 "Deleting an inactive storage pool will only undefine the pool. Its content will not be deleted.": [
  null,
  "Удаление неактивного пула носителей только отменит определение пула. Его содержимое не будет удалено."
 ],
 "Description": [
  null,
  "Описание"
 ],
 "Deselect others": [
  null,
  ""
 ],
 "Detach the disks using this pool from any VMs before attempting deletion.": [
  null,
  "Перед попыткой удаления отсоедините диски, использующие этот пул, от всех виртуальных машин."
 ],
 "Details": [
  null,
  "Подробности"
 ],
 "Device": [
  null,
  "Устройство"
 ],
 "Devices": [
  null,
  "Устройства"
 ],
 "Disconnect": [
  null,
  "Отключиться"
 ],
 "Disk image file": [
  null,
  "Файл образа диска"
 ],
 "Disk images can be stored in user home directory": [
  null,
  ""
 ],
 "Disk settings could not be saved": [
  null,
  "Не удалось сохранить параметры диска"
 ],
 "Disk-only snapshot": [
  null,
  "Снимок только для диска"
 ],
 "Disks": [
  null,
  "Диски"
 ],
 "Display Controller": [
  null,
  ""
 ],
 "Do not run this VM on the origin and destination hosts at the same time.": [
  null,
  ""
 ],
 "Do nothing": [
  null,
  ""
 ],
 "Domain has crashed": [
  null,
  "Сбой домена"
 ],
 "Domain is blocked on resource": [
  null,
  "Домен заблокирован на ресурсе"
 ],
 "Download an OS": [
  null,
  "Загрузить ОС"
 ],
 "Download progress": [
  null,
  ""
 ],
 "Dump core": [
  null,
  ""
 ],
 "Dying": [
  null,
  "Умирающий"
 ],
 "Edit": [
  null,
  "Изменить"
 ],
 "Edit $0 attributes": [
  null,
  "Редактировать атрибуты $0"
 ],
 "Edit watchdog device type": [
  null,
  ""
 ],
 "Editing network interfaces of transient guests is not allowed": [
  null,
  ""
 ],
 "Editing transient network interfaces is not allowed": [
  null,
  ""
 ],
 "Eject": [
  null,
  ""
 ],
 "Emulated machine": [
  null,
  "Эмулированный компьютер"
 ],
 "Enable virtualization support in BIOS/EFI settings.": [
  null,
  ""
 ],
 "Encryption Controller": [
  null,
  ""
 ],
 "End": [
  null,
  "Конец"
 ],
 "End should not be empty": [
  null,
  "Конец не должен быть пустым"
 ],
 "Enter root and/or user information to enable unattended installation.": [
  null,
  ""
 ],
 "Error checking token": [
  null,
  ""
 ],
 "Example, $0": [
  null,
  ""
 ],
 "Existing disk image on host's file system": [
  null,
  "Существующий образ диска в файловой системе узла"
 ],
 "Expand": [
  null,
  "Расширить"
 ],
 "Failed": [
  null,
  "Сбой"
 ],
 "Failed to change firmware": [
  null,
  "Не удалось изменить микропрограмму"
 ],
 "Failed to clone VM $0": [
  null,
  "Не удалось клонировать ВМ $0"
 ],
 "Failed to fetch the IP addresses of the interfaces present in $0": [
  null,
  "Не удалось получить IP-адреса интерфейсов, присутствующих в $0"
 ],
 "Failed to save network settings": [
  null,
  ""
 ],
 "Failed to send key Ctrl+Alt+$0 to VM $1": [
  null,
  "Не удалось послать сочетание клавиш Ctrl+Alt+$0 в ВМ $1"
 ],
 "Fewer than the maximum number of virtual CPUs should be enabled.": [
  null,
  "Количество включённых виртуальных ЦП должно быть меньше их максимального числа."
 ],
 "File": [
  null,
  "Файл"
 ],
 "Filesystem directory": [
  null,
  "Каталог файловой системы"
 ],
 "Filter by name": [
  null,
  "Фильтровать по имени"
 ],
 "Firmware": [
  null,
  "Микропрограмма"
 ],
 "For general guest connectivity on hosts with dynamic / wireless networking configs.": [
  null,
  ""
 ],
 "For general guest connectivity on hosts with static wired networking configs.": [
  null,
  ""
 ],
 "Force reboot": [
  null,
  "Принудительная перезагрузка"
 ],
 "Force shut down": [
  null,
  "Принудительное завершение работы"
 ],
 "Format": [
  null,
  "Формат"
 ],
 "Forward mode": [
  null,
  "Режим пересылки"
 ],
 "Forwarding mode": [
  null,
  "Режим переадресации"
 ],
 "Full disk images and the domain's memory will be migrated. Only non-shared, writable disk images will be transferred. Unused storage will remain on the origin after migration.": [
  null,
  ""
 ],
 "General": [
  null,
  "Общее"
 ],
 "Generate automatically": [
  null,
  "Создать автоматически"
 ],
 "Get a new RHSM token.": [
  null,
  ""
 ],
 "GiB": [
  null,
  "ГиБ"
 ],
 "Go to VMs list": [
  null,
  "Перейти к списку ВМ"
 ],
 "Good choice for desktop virtualization": [
  null,
  ""
 ],
 "Graphical": [
  null,
  ""
 ],
 "Graphical console support not enabled": [
  null,
  ""
 ],
 "Guest port": [
  null,
  ""
 ],
 "Guest port help": [
  null,
  ""
 ],
 "Hide additional options": [
  null,
  "Скрыть дополнительные параметры"
 ],
 "Host": [
  null,
  "Узел"
 ],
 "Host device": [
  null,
  "Главное устройство"
 ],
 "Host device will be removed from $0:": [
  null,
  ""
 ],
 "Host name": [
  null,
  "Имя узла"
 ],
 "Host port help": [
  null,
  ""
 ],
 "Host should not be empty": [
  null,
  "Имя узла не должно быть пустым"
 ],
 "Hypervisor details": [
  null,
  "Сведения о гипервизоре"
 ],
 "ID": [
  null,
  "Идентификатор"
 ],
 "IP": [
  null,
  ""
 ],
 "IP address": [
  null,
  "IP-адрес"
 ],
 "IP configuration": [
  null,
  "Настройка IP"
 ],
 "IPv4 address": [
  null,
  "IPv4-адрес"
 ],
 "IPv4 address cannot be same as the network's broadcast address": [
  null,
  ""
 ],
 "IPv4 and IPv6": [
  null,
  "IPv4 и IPv6"
 ],
 "IPv4 network should not be empty": [
  null,
  "Сеть IPv4 не должна быть пустой"
 ],
 "IPv4 only": [
  null,
  "Только IPv4"
 ],
 "IPv4 prefix length must be a multiple of 8": [
  null,
  ""
 ],
 "IPv6 address": [
  null,
  "IPv6-адрес"
 ],
 "IPv6 network should not be empty": [
  null,
  "Сеть IPv6 не должна быть пустой"
 ],
 "IPv6 only": [
  null,
  "Только IPv6"
 ],
 "Ideal for server VMs": [
  null,
  ""
 ],
 "Ideal networking support": [
  null,
  ""
 ],
 "Identifier in use by $0. VMs with an identical identifier cannot run at the same time.": [
  null,
  ""
 ],
 "Identifier may be silently truncated to $0 characters ": [
  null,
  ""
 ],
 "Idle": [
  null,
  "Неактивный"
 ],
 "If host IP is set to 0.0.0.0 or not set at all, the port will be bound on all IPs on the host.": [
  null,
  ""
 ],
 "Ignore": [
  null,
  ""
 ],
 "Import VM": [
  null,
  "Импортировать ВМ"
 ],
 "Import a virtual machine": [
  null,
  "Импортировать виртуальную машину"
 ],
 "Import and edit": [
  null,
  ""
 ],
 "Importing an image with a backing file is unsupported": [
  null,
  ""
 ],
 "In most configurations, macvtap does not work for host to guest network communication.": [
  null,
  "В большинстве конфигураций macvtap не работает при взаимодействии узла и гостевой сети"
 ],
 "Initiator": [
  null,
  "Инициатор"
 ],
 "Input Device Controller": [
  null,
  ""
 ],
 "Insert disc media": [
  null,
  ""
 ],
 "Inside the VM": [
  null,
  ""
 ],
 "Install": [
  null,
  "Установить"
 ],
 "Installation source": [
  null,
  "Источник установки"
 ],
 "Installation source must not be empty": [
  null,
  "Источник установки не должен быть пустым"
 ],
 "Installation type": [
  null,
  "Тип установки"
 ],
 "Intelligent Controller": [
  null,
  ""
 ],
 "Interface type": [
  null,
  "Тип интерфейса"
 ],
 "Invalid IPv4 address": [
  null,
  "Недопустимый IPv4-адрес"
 ],
 "Invalid IPv4 mask or prefix length": [
  null,
  "Недопустимая маска или длина префикса адреса IPv4"
 ],
 "Invalid IPv6 address": [
  null,
  "Недопустимый IPv6-адрес"
 ],
 "Invalid IPv6 prefix": [
  null,
  "Недопустимый префикс адреса IPv6"
 ],
 "Invalid filename": [
  null,
  "Недопустимое имя файла"
 ],
 "Isolated network": [
  null,
  "Изолированная сеть"
 ],
 "It can also be used to enable the inline graphical console in the browser, which does not support SPICE.": [
  null,
  ""
 ],
 "Keys are located in ~/.ssh/ and have a \".pub\" extension.": [
  null,
  ""
 ],
 "LVM volume group": [
  null,
  "Группа томов LVM"
 ],
 "Leave the password blank if you do not wish to have a root account created": [
  null,
  "Оставьте поле пароля пустым, если не хотите создавать учетную запись root"
 ],
 "Leave the password blank if you do not wish to have a user account created": [
  null,
  "Оставьте поле пароля пустым, если не хотите создавать учетную запись пользователя"
 ],
 "Leave the password blank if you do not wish to set a root password": [
  null,
  "Оставьте поле пароля пустым, если не хотите создавать учетную запись root"
 ],
 "Libvirt did not detect any UEFI/OVMF firmware image installed on the host": [
  null,
  "Libvirt не удалось обнаружить какого-либо образа микропрограммы UEFI/OVMF, установленного в основной системе"
 ],
 "Libvirt or hypervisor does not support UEFI": [
  null,
  "Libvirt или гипервизор не поддерживают UEFI"
 ],
 "Loading resources": [
  null,
  "Загрузка ресурсов"
 ],
 "Local install media (ISO image or distro install tree)": [
  null,
  ""
 ],
 "Local scaling": [
  null,
  ""
 ],
 "MAC": [
  null,
  "MAC"
 ],
 "MAC address": [
  null,
  "MAC-адрес"
 ],
 "MAC address already in use": [
  null,
  ""
 ],
 "Machine must be shut off before changing bus type": [
  null,
  "Машина должна быть выключена перед сменой типа шины"
 ],
 "Mask or prefix length": [
  null,
  "Маска или длина префикса"
 ],
 "Mask or prefix length should not be empty": [
  null,
  "Маска или длина префикса не должна быть пустой"
 ],
 "Maximum allocation": [
  null,
  "Максимальный размер участка памяти"
 ],
 "Maximum memory could not be saved": [
  null,
  "Не удалось сохранить максимальное значение для памяти"
 ],
 "Maximum number of virtual CPUs allocated for the guest OS, which must be between 1 and $0": [
  null,
  "Максимальное количество виртуальных процессоров, выделенных для гостевой ОС, которое должно быть в интервале между 1 и $0"
 ],
 "Maximum transmission unit": [
  null,
  "Максимальный передаваемый блок данных"
 ],
 "Media will be ejected from $0:": [
  null,
  ""
 ],
 "Memory": [
  null,
  "Память"
 ],
 "Memory could not be saved": [
  null,
  "Не удалось сохранить значение для памяти"
 ],
 "Memory must not be 0": [
  null,
  "Значение для памяти должно отличаться от нуля"
 ],
 "Memory snapshot will use about $0.": [
  null,
  ""
 ],
 "MiB": [
  null,
  "МиБ"
 ],
 "Migrate": [
  null,
  ""
 ],
 "Migrate VM to another host": [
  null,
  ""
 ],
 "Miscellaneous": [
  null,
  ""
 ],
 "Mode": [
  null,
  "Режим"
 ],
 "Model": [
  null,
  "Модель"
 ],
 "Model type": [
  null,
  "Тип модели"
 ],
 "More info": [
  null,
  ""
 ],
 "Mount tag": [
  null,
  ""
 ],
 "Multimedia Controller": [
  null,
  ""
 ],
 "Must be an address instead of the network identifier, such as $0": [
  null,
  ""
 ],
 "NAT to $0": [
  null,
  "NAT к $0"
 ],
 "NIC $0 of VM $1 failed to change state": [
  null,
  "Не удалось изменить состояние сетевого адаптера $0 виртуальной машины $1"
 ],
 "Name": [
  null,
  "Имя"
 ],
 "Name must not be empty": [
  null,
  "Имя не должно быть пустым"
 ],
 "Name should not be empty": [
  null,
  "Имя не должно быть пустым"
 ],
 "Name: ": [
  null,
  "Имя: "
 ],
 "Netmask": [
  null,
  "Маска сети"
 ],
 "Network $0 failed to get activated": [
  null,
  "Не удалось включить сеть $0"
 ],
 "Network $0 failed to get deactivated": [
  null,
  "Не удалось отключить сеть $0"
 ],
 "Network boot (PXE)": [
  null,
  "Сетевая загрузка (PXE)"
 ],
 "Network file system": [
  null,
  "Сетевая файловая система"
 ],
 "Network interface settings could not be saved": [
  null,
  "Не удалось сохранить параметры сетевого интерфейса"
 ],
 "Network selection does not support PXE.": [
  null,
  "Выбор сети не поддерживает PXE."
 ],
 "Networks": [
  null,
  "Сети"
 ],
 "New volume name": [
  null,
  "Новое имя тома"
 ],
 "No SSH keys specified": [
  null,
  ""
 ],
 "No VM is running or defined on this host": [
  null,
  "На данном узле нет запущенных или определённых виртуальных машин"
 ],
 "No boot device found": [
  null,
  "Загрузочное устройство не найдено"
 ],
 "No free targets for bus type $0.": [
  null,
  ""
 ],
 "No network devices": [
  null,
  "Сетевые устройства отсутствуют"
 ],
 "No network is defined on this host": [
  null,
  "На этом узле не определено ни одной сети"
 ],
 "No networks available": [
  null,
  "Нет доступных сетей"
 ],
 "No ports forwarded": [
  null,
  ""
 ],
 "No scaling or resizing": [
  null,
  ""
 ],
 "No storage": [
  null,
  "Нет хранилища"
 ],
 "No storage pool is defined on this host": [
  null,
  "На этом узле не определён пул носителей"
 ],
 "No storage volumes defined for this storage pool": [
  null,
  "Для этого пула носителей не определены тома хранения"
 ],
 "No virtual networks": [
  null,
  "Нет виртуальных сетей"
 ],
 "Non-Essential Instrumentation": [
  null,
  ""
 ],
 "Non-persistent network cannot be deleted. It ceases to exists when it's deactivated.": [
  null,
  "Временная сеть не может быть удалена. Она перестает существовать после отключения."
 ],
 "Non-persistent storage pool cannot be deleted. It ceases to exists when it's deactivated.": [
  null,
  "Временный буфер хранения не может быть удален. Он перестает существовать после отключения."
 ],
 "None": [
  null,
  "Нет"
 ],
 "None (isolated network)": [
  null,
  "Нет (изолированная сеть)"
 ],
 "Offline token": [
  null,
  ""
 ],
 "Old token expired": [
  null,
  ""
 ],
 "One or more selected volumes are used by domains. Detach the disks first to allow volume deletion.": [
  null,
  "Один или несколько выбранных томов используются доменами. Сначала отсоедините диски, чтобы разрешить удаление тома."
 ],
 "Only editable when the guest is shut off": [
  null,
  "Может редактироваться, только когда гостевая система выключена"
 ],
 "Open": [
  null,
  "Открытая"
 ],
 "Operating system": [
  null,
  "Операционная система"
 ],
 "Operation is in progress": [
  null,
  "Операция выполняется"
 ],
 "Other VMs using SPICE": [
  null,
  ""
 ],
 "Overview": [
  null,
  "Обзор"
 ],
 "PCI": [
  null,
  ""
 ],
 "Password must be 8 characters or less. VNC passwords do not provide encryption and are generally cryptographically weak. They can not be used to secure connections in untrusted networks.": [
  null,
  ""
 ],
 "Password must be at most 8 characters.": [
  null,
  ""
 ],
 "Path": [
  null,
  "Путь"
 ],
 "Path on host's filesystem": [
  null,
  "Путь в файловой системе узла"
 ],
 "Path to ISO file on host's file system": [
  null,
  "Путь к файлу ISO в файловой системе узла"
 ],
 "Pause": [
  null,
  "Приостановить"
 ],
 "Permanent (default)": [
  null,
  ""
 ],
 "Permissions denied for disk images in home directories": [
  null,
  ""
 ],
 "Persistence": [
  null,
  "Сохраняемость"
 ],
 "Persistent": [
  null,
  "Постоянно"
 ],
 "Physical disk device": [
  null,
  "Физические дисковое устройство"
 ],
 "Physical disk device on host": [
  null,
  "Физическое дисковое устройство на узле"
 ],
 "Please choose a different MAC address": [
  null,
  ""
 ],
 "Please enter new volume name": [
  null,
  "Введите новое имя тома"
 ],
 "Please see $0 how to reconfigure your VM manually.": [
  null,
  ""
 ],
 "Pool": [
  null,
  "Пул"
 ],
 "Pool needs to be active to create volume": [
  null,
  ""
 ],
 "Pool type doesn't support volume creation": [
  null,
  "Тип пула не поддерживает создание томов"
 ],
 "Pool's volumes are used by VMs ": [
  null,
  "Тома пула используются виртуальными машинами "
 ],
 "Port": [
  null,
  "Порт"
 ],
 "Port forwards": [
  null,
  ""
 ],
 "Port must be 5900 or larger.": [
  null,
  ""
 ],
 "Port must be a number that is at least 5900. Leave empty to automatically assign a free port when the machine starts.": [
  null,
  ""
 ],
 "Power off": [
  null,
  ""
 ],
 "Preferred number of sockets to expose to the guest.": [
  null,
  "Предпочтительное количество сокетов для выставления гостевой системе."
 ],
 "Prefix": [
  null,
  "Префикс"
 ],
 "Prefix length": [
  null,
  "Длина префикса"
 ],
 "Prefix length should not be empty": [
  null,
  "Длина префикса не должна быть пустой"
 ],
 "Private": [
  null,
  "Частная"
 ],
 "Processing Accelerator": [
  null,
  ""
 ],
 "Processor": [
  null,
  ""
 ],
 "Product": [
  null,
  "Продукт"
 ],
 "Profile": [
  null,
  "Профиль"
 ],
 "Protocol": [
  null,
  "Протокол"
 ],
 "Provides a virtual LAN with NAT to the outside world.": [
  null,
  ""
 ],
 "Public SSH key": [
  null,
  ""
 ],
 "Public key": [
  null,
  ""
 ],
 "Read-only": [
  null,
  "Только для чтения"
 ],
 "Reboot": [
  null,
  "Перезагрузка"
 ],
 "Released $0": [
  null,
  ""
 ],
 "Remote URL": [
  null,
  "Удалённый URL-адрес"
 ],
 "Remote resizing": [
  null,
  ""
 ],
 "Remote viewer applications can connect to the following address:": [
  null,
  ""
 ],
 "Remove": [
  null,
  "Удалить"
 ],
 "Remove SPICE audio and host devices": [
  null,
  ""
 ],
 "Remove static host from DHCP": [
  null,
  ""
 ],
 "Rename": [
  null,
  ""
 ],
 "Rename VM $0": [
  null,
  ""
 ],
 "Replace": [
  null,
  ""
 ],
 "Replace SPICE devices": [
  null,
  ""
 ],
 "Replace SPICE devices in VM $0": [
  null,
  ""
 ],
 "Replace SPICE on selected VMs.": [
  null,
  ""
 ],
 "Replace with VNC": [
  null,
  ""
 ],
 "Reset": [
  null,
  ""
 ],
 "Restrictions in networking (SLIRP-based emulation) and PCI device assignment": [
  null,
  ""
 ],
 "Resume": [
  null,
  "Возобновить"
 ],
 "Retry": [
  null,
  ""
 ],
 "Reverting to this snapshot will take the VM back to the time of the snapshot and the current state will be lost, along with any data not captured in a snapshot": [
  null,
  ""
 ],
 "Root password": [
  null,
  "Пароль root"
 ],
 "Route to $0": [
  null,
  "Маршрутизация к $0"
 ],
 "Routed network": [
  null,
  "Сеть с маршрутизацией"
 ],
 "Row select": [
  null,
  ""
 ],
 "Run": [
  null,
  "Запуск"
 ],
 "Run when host boots": [
  null,
  "Выполнять при загрузке узла"
 ],
 "Running": [
  null,
  "Работает"
 ],
 "SPICE is not supported on this host and will cause this virtual machine to not boot.": [
  null,
  ""
 ],
 "Satellite Communication Controller": [
  null,
  ""
 ],
 "Save": [
  null,
  "Сохранить"
 ],
 "Security failure": [
  null,
  ""
 ],
 "Select all": [
  null,
  ""
 ],
 "Send key": [
  null,
  "Отправить клавишу"
 ],
 "Send non-maskable interrupt": [
  null,
  "Отправить немаскируемое прерывание"
 ],
 "Serial console": [
  null,
  "Последовательная консоль"
 ],
 "Serial console support not enabled": [
  null,
  ""
 ],
 "Set DHCP range": [
  null,
  "Задать диапазон DHCP"
 ],
 "Set manually": [
  null,
  "Задать вручную"
 ],
 "Setting the user passwords for unattended installation requires starting the VM when creating it": [
  null,
  "Установка паролей пользователей для автоматической установки требует запуска ВМ при ее создании"
 ],
 "Share": [
  null,
  ""
 ],
 "Share a host directory with the guest": [
  null,
  ""
 ],
 "Shared directories": [
  null,
  "Общие директории"
 ],
 "Shared host directories need to be manually mounted inside the VM": [
  null,
  "Общие директории требуют ручного монтирования внутри ВМ"
 ],
 "Show additional options": [
  null,
  "Показать дополнительные параметры"
 ],
 "Shut down": [
  null,
  "Завершение работы"
 ],
 "Shut off the VM in order to edit firmware configuration": [
  null,
  "Выключите ВМ для редактирования конфигурации микропрограммы"
 ],
 "Shutdown and restart": [
  null,
  ""
 ],
 "Signal Processing Controller": [
  null,
  ""
 ],
 "Simple Communication Controller": [
  null,
  ""
 ],
 "Size": [
  null,
  "Размер"
 ],
 "Slot": [
  null,
  ""
 ],
 "Snapshots": [
  null,
  "Моментальные снимки"
 ],
 "Snapshots allow you to revert to an earlier state": [
  null,
  "Моментальные снимки позволяют вам вернуть состояние ВМ к исходному"
 ],
 "Sockets": [
  null,
  "Сокеты"
 ],
 "Some configuration changes only take effect after a complete shutdown and restart:": [
  null,
  "Некоторые изменения конфигурации применяются только после полной перезагрузки"
 ],
 "Source": [
  null,
  "Источник"
 ],
 "Source format": [
  null,
  "Формат источника"
 ],
 "Source path": [
  null,
  "Путь к источнику"
 ],
 "Source path should not be empty": [
  null,
  "Путь к источнику не должен быть пустым"
 ],
 "Source should start with http, ftp or nfs protocol": [
  null,
  "Путь должен начинаться с указания протокола HTTP, FTP или NFS"
 ],
 "Source volume group": [
  null,
  "Группа томов источника"
 ],
 "Start": [
  null,
  "Запустить"
 ],
 "Start pool when host boots": [
  null,
  "Запускать пул при загрузке узла"
 ],
 "Start should not be empty": [
  null,
  "Начало не должно быть пустым"
 ],
 "Startup": [
  null,
  "Запуск"
 ],
 "State": [
  null,
  "Состояние"
 ],
 "Static host entries": [
  null,
  ""
 ],
 "Storage": [
  null,
  "Хранилище"
 ],
 "Storage is at a shared location": [
  null,
  ""
 ],
 "Storage pool $0 failed to get activated": [
  null,
  "Не удалось включить пул носителей $0"
 ],
 "Storage pool $0 failed to get deactivated": [
  null,
  "Не удалось отключить пул носителей $0"
 ],
 "Storage pool failed to be created": [
  null,
  "Не удалось создать пул носителей"
 ],
 "Storage pool name": [
  null,
  "Имя пула носителей"
 ],
 "Storage pools": [
  null,
  "Пулы носителей"
 ],
 "Storage size must not be 0": [
  null,
  "Размер хранилища не может быть равен нулю"
 ],
 "Storage volume": [
  null,
  "Том хранилища"
 ],
 "Storage volume size must not exceed the storage pool's capacity ($0 $1)": [
  null,
  "Объём хранилища не может превышать размер пула"
 ],
 "Storage volumes": [
  null,
  "Тома хранилища"
 ],
 "Storage volumes could not be deleted": [
  null,
  "Не удалось удалить тома хранилища"
 ],
 "Storage volumes must be shared between this host and the destination host.": [
  null,
  ""
 ],
 "Suspended (PM)": [
  null,
  "приостановлено (PM)"
 ],
 "Switch to VNC to continue using this machine.": [
  null,
  ""
 ],
 "System": [
  null,
  "Система"
 ],
 "TPM": [
  null,
  ""
 ],
 "Table of selectable host devices": [
  null,
  ""
 ],
 "Target": [
  null,
  "Цель"
 ],
 "Target path": [
  null,
  "Конечный путь"
 ],
 "Target path should not be empty": [
  null,
  "Конечный путь не должен быть пустым"
 ],
 "Temporary": [
  null,
  ""
 ],
 "Temporary migration": [
  null,
  ""
 ],
 "The VM needs to be running or shut off to detach this device": [
  null,
  "ВМ должна работать или быть отключена, чтобы отсоединить это устройство"
 ],
 "The directory on the server being exported": [
  null,
  "Экспортируемый каталог на сервере"
 ],
 "The host path that is to be exported.": [
  null,
  ""
 ],
 "The migrated VM configuration is removed from the source host. The destination host is considered the new home of the VM.": [
  null,
  ""
 ],
 "The port on the guest. If left empty, the same port as on the host is used.": [
  null,
  ""
 ],
 "The port on the host that is fotwarded into the guest. You can also specify a range of ports like 4000-4050.": [
  null,
  ""
 ],
 "The selected operating system has minimum memory requirement of $0 $1": [
  null,
  "Минимальный объём памяти для выбранной операционной системы — $0 $1"
 ],
 "The selected operating system has minimum storage size requirement of $0 $1": [
  null,
  "Минимальный размер хранилища для выбранной операционной системы — $0 $1"
 ],
 "The static host entry for $0 will be removed:": [
  null,
  ""
 ],
 "The storage pool could not be deleted": [
  null,
  "Не удалось удалить пул носителей"
 ],
 "The tag name to be used by the guest to mount this export point.": [
  null,
  ""
 ],
 "Then copy and paste it above.": [
  null,
  ""
 ],
 "There are no sources for virtual network interfaces on this host. You might want to create a virtual network.": [
  null,
  ""
 ],
 "This VM is transient. Shut it down if you wish to delete it.": [
  null,
  "Эта ВМ временная. Выключите ее, если хотите ее удалить."
 ],
 "This disk will be removed from $0:": [
  null,
  ""
 ],
 "This filesystem will be removed from $0:": [
  null,
  ""
 ],
 "This is intended for a host which does not support SPICE due to upgrades or live migration.": [
  null,
  ""
 ],
 "This machine has a SPICE graphical console that can not be shown here.": [
  null,
  ""
 ],
 "This volume is already used by another VM.": [
  null,
  "Этот том уже используется другой виртуальной машиной."
 ],
 "Threads per core": [
  null,
  "Потоков на ядро"
 ],
 "Transient VMs don't support editing firmware configuration": [
  null,
  "Временные ВМ не поддерживают редактирование конфигурации микропрограмм"
 ],
 "Troubleshoot": [
  null,
  "Устранить неполадки"
 ],
 "Type": [
  null,
  "Тип"
 ],
 "UDP": [
  null,
  ""
 ],
 "URL (ISO image or distro install tree)": [
  null,
  ""
 ],
 "USB": [
  null,
  ""
 ],
 "UUID": [
  null,
  ""
 ],
 "Unclassified": [
  null,
  ""
 ],
 "Undefined": [
  null,
  ""
 ],
 "Unique name": [
  null,
  "Уникальное имя"
 ],
 "Unique network name": [
  null,
  "Уникальное сетевое имя"
 ],
 "Unit": [
  null,
  "Устройство"
 ],
 "Unknown firmware": [
  null,
  "Неизвестная микропрограмма"
 ],
 "Unspecified": [
  null,
  ""
 ],
 "Url": [
  null,
  "URL-адрес"
 ],
 "Usage": [
  null,
  "Использование"
 ],
 "Use existing": [
  null,
  "Использовать существующий"
 ],
 "Use extended attributes on files and directories": [
  null,
  ""
 ],
 "Use the same location on both the origin and destination hosts for your storage. This can be a shared storage pool, NFS, or any other method of sharing storage.": [
  null,
  ""
 ],
 "Used by": [
  null,
  "Используется"
 ],
 "Used on host": [
  null,
  ""
 ],
 "User login must not be empty when SSH keys are set": [
  null,
  ""
 ],
 "User login must not be empty when user password is set": [
  null,
  ""
 ],
 "User password": [
  null,
  "Пароль пользователя"
 ],
 "User password must not be empty when user login is set": [
  null,
  ""
 ],
 "Uses SPICE": [
  null,
  ""
 ],
 "VM $0 already exists": [
  null,
  "ВМ $0 уже существует"
 ],
 "VM $0 does not exist on $1 connection": [
  null,
  ""
 ],
 "VM $0 failed to force reboot": [
  null,
  "Не удалось принудительно перезапустить виртуальную машину $0"
 ],
 "VM $0 failed to force shutdown": [
  null,
  "Не удалось принудительно завершить работу виртуальной машины $0"
 ],
 "VM $0 failed to get installed": [
  null,
  "Не удалось установить виртуальную машину $0"
 ],
 "VM $0 failed to pause": [
  null,
  "Не удалось приостановить виртуальную машину $0"
 ],
 "VM $0 failed to reboot": [
  null,
  "Не удалось перезапустить виртуальную машину $0"
 ],
 "VM $0 failed to resume": [
  null,
  "Не удалось возобновить виртуальную машину $0"
 ],
 "VM $0 failed to send NMI": [
  null,
  "Ошибка отправки немаскируемого прерывания виртуальной машиной $0"
 ],
 "VM $0 failed to shutdown": [
  null,
  "Не удалось завершить работу виртуальной машины $0"
 ],
 "VM $0 failed to start": [
  null,
  "Не удалось запустить виртуальную машину $0"
 ],
 "VM launched with unprivileged limited access, with the process and PTY owned by your user account": [
  null,
  ""
 ],
 "VM will launch with root permissions": [
  null,
  ""
 ],
 "VNC": [
  null,
  ""
 ],
 "VNC with TLS is not supported by the in-page viewer": [
  null,
  ""
 ],
 "Valid token": [
  null,
  ""
 ],
 "Vendor": [
  null,
  "Производитель"
 ],
 "Vendor support ended $0": [
  null,
  ""
 ],
 "Virtual machines": [
  null,
  "Виртуальные машины"
 ],
 "Virtual machines management": [
  null,
  "Управление виртуальными машинами"
 ],
 "Virtual network": [
  null,
  "Виртуальная сеть"
 ],
 "Virtual network failed to be created": [
  null,
  "Не удалось создать виртуальную сеть"
 ],
 "Virtual socket support enables communication between the host and guest over a socket. It still requires special vsock-aware software to communicate over the socket.": [
  null,
  ""
 ],
 "Virtualization service (libvirt) is not active": [
  null,
  "Служба виртуализации (libvirt) не активна"
 ],
 "Volume": [
  null,
  "Том"
 ],
 "Volume failed to be created": [
  null,
  "Не удалось создать том"
 ],
 "Volume group name": [
  null,
  "Имя группы томов"
 ],
 "Volume group name should not be empty": [
  null,
  "Имя группы томов не должно быть пустым"
 ],
 "Vsock": [
  null,
  ""
 ],
 "WWPN": [
  null,
  "WWPN"
 ],
 "Watchdog": [
  null,
  ""
 ],
 "Watchdogs act when systems stop responding. To use this virtual watchdog device, the guest system also needs to have an additional driver and a running watchdog service.": [
  null,
  ""
 ],
 "Wireless Controller": [
  null,
  ""
 ],
 "Writeable": [
  null,
  "Для записи"
 ],
 "You can mount the shared folder using:": [
  null,
  ""
 ],
 "You need to select the most closely matching operating system": [
  null,
  "Необходимо выбрать наиболее соответствующую операционную систему"
 ],
 "active": [
  null,
  "активно"
 ],
 "add entry": [
  null,
  ""
 ],
 "bridge": [
  null,
  "мост"
 ],
 "cdrom": [
  null,
  "дисковод для компакт-дисков"
 ],
 "custom": [
  null,
  "другой"
 ],
 "default": [
  null,
  ""
 ],
 "direct": [
  null,
  "direct"
 ],
 "disabled": [
  null,
  "отключён"
 ],
 "disk": [
  null,
  "диск"
 ],
 "down": [
  null,
  "не работает"
 ],
 "edit": [
  null,
  "редактировать"
 ],
 "enabled": [
  null,
  "включено"
 ],
 "ethernet": [
  null,
  "ethernet"
 ],
 "host": [
  null,
  "узел"
 ],
 "host device": [
  null,
  "главное устройство"
 ],
 "hostdev": [
  null,
  "hostdev"
 ],
 "iSCSI direct target": [
  null,
  "Цель iSCSI direct"
 ],
 "iSCSI initiator IQN": [
  null,
  "IQN инициатора iSCSI"
 ],
 "iSCSI target": [
  null,
  "Цель iSCSI"
 ],
 "iSCSI target IQN": [
  null,
  "IQN цели iSCSI"
 ],
 "mcast": [
  null,
  "mcast"
 ],
 "more info": [
  null,
  "доп. сведения"
 ],
 "mount point: The mount point inside the guest": [
  null,
  ""
 ],
 "mount tag: The tag associated to the exported mount point": [
  null,
  ""
 ],
 "network": [
  null,
  "сеть"
 ],
 "no": [
  null,
  "нет"
 ],
 "no state saved": [
  null,
  ""
 ],
 "none": [
  null,
  ""
 ],
 "redirected device": [
  null,
  "перенаправленное устройство"
 ],
 "server": [
  null,
  "сервер"
 ],
 "udp": [
  null,
  "udp"
 ],
 "up": [
  null,
  "работает"
 ],
 "user": [
  null,
  "пользователь"
 ],
 "vCPU count": [
  null,
  "Количество виртуальных ЦП"
 ],
 "vCPU maximum": [
  null,
  "Наибольшее количество виртуальных ЦП"
 ],
 "vCPUs": [
  null,
  "Виртуальные ЦП"
 ],
 "vhostuser": [
  null,
  "vhostuser"
 ],
 "virt-install package needs to be installed on the system in order to create new VMs": [
  null,
  "Для создания новых виртуальных машин в системе должен быть установлен пакет virt-install"
 ],
 "vsock requires special software": [
  null,
  ""
 ],
 "waiting": [
  null,
  ""
 ],
 "yes": [
  null,
  "да"
 ]
});
