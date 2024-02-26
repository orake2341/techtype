interface JobOrder {
  _id: string;
  JOStatus: string;
  PaymentStatus: string;
  selectedDate: string;
  jobSite: string;
  services: any[];
  message: string;
}

interface JobOrderList {
  list: JobOrder[];
  error: string;
}

type ModalProp = {
  isOpen: boolean;
  onClose: () => void;
  addRow: ({}) => void;
  serviceData: any;
  editRow: (id: number, newData: any) => void;
};

interface KeyboardModdingData {
  id: string;
  typeofservice: string;
  typeofkeyboardmods: string;
  keyboarddeepclean: boolean;
  keycapcleaning: boolean;
  switchlubing: boolean;
  description: string;
}

interface PCCleaningData {
  id: string;
  typeofservice: string;
  cleaningMethod: string;
  description: string;
}

interface PCBuildingData {
  id: string;
  typeofservice: string;
  processor: string;
  graphicsCard: string;
  description: string;
}

type KeyboardModdingFormProps = {
  id: string;
  data: KeyboardModdingData;
  setData: (data: KeyboardModdingData) => void;
};

type PCBuildingProp = {
  id: string;
  data: PCBuildingData;
  setData: (data: PCBuildingData) => void;
};

type PCCleaningProp = {
  id: string;
  data: PCCleaningData;
  setData: (data: PCCleaningData) => void;
};
