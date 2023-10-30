const DeleteList = ({ onCancel, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20">
      <div className="w-80 bg-white rounded-lg p-6 shadow-lg ">
        <div className="text-xl font-semibold mb-4 text-gray-800">
          Deleting this list will also delete all tasks within the list.
        </div>
        <hr className="my-4" />
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteList;

