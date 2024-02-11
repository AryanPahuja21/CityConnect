import React, { useState } from 'react';

const Forum = () => {
  const [threads, setThreads] = useState([]);

  const addThread = (title, content) => {
    setThreads([...threads, { id: Date.now(), title, content, replies: [] }]);
  };

  const removeThread = (id) => {
    setThreads(threads.filter(thread => thread.id !== id));
  };

  const editThread = (id, updatedTitle, updatedContent) => {
    setThreads(threads.map(thread => {
      if (thread.id === id) {
        return {
          ...thread,
          title: updatedTitle,
          content: updatedContent
        };
      }
      return thread;
    }));
  };

  const addReply = (threadId, replyContent) => {
    setThreads(threads.map(thread => {
      if (thread.id === threadId) {
        return {
          ...thread,
          replies: [...thread.replies, { id: Date.now(), content: replyContent }]
        };
      }
      return thread;
    }));
  };

  const removeReply = (threadId, replyId) => {
    setThreads(threads.map(thread => {
      if (thread.id === threadId) {
        return {
          ...thread,
          replies: thread.replies.filter(reply => reply.id !== replyId)
        };
      }
      return thread;
    }));
  };

  return (
    <div className="container mx-auto p-10 bg-yellow-400 rounded-3xl p-10 mt-10 mb-10">
      <h1 className="text-4xl font-bold mb-8">Post what you saw in the city</h1>
      <ThreadList
        threads={threads}
        removeThread={removeThread}
        editThread={editThread}
        addReply={addReply}
        removeReply={removeReply}
      />
      <ThreadForm addThread={addThread} />
    </div>
  );
};

const ThreadList = ({ threads, removeThread, editThread, addReply, removeReply }) => (
  <div className="space-y-4">
    {threads.map(thread => (
      <Thread
        key={thread.id}
        thread={thread}
        removeThread={removeThread}
        editThread={editThread}
        addReply={addReply}
        removeReply={removeReply}
      />
    ))}
  </div>
);

const Thread = ({ thread, removeThread, editThread, addReply, removeReply }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(thread.title);
  const [editedContent, setEditedContent] = useState(thread.content);

  const handleEdit = () => {
    editThread(thread.id, editedTitle, editedContent);
    setEditMode(false);
  };

  return (
    <div className="border p-10 rounded-2xl">
      {editMode ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border rounded px-2 py-1 w-full mb-2"
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="border rounded px-2 py-1 w-full mb-2"
          ></textarea>
          <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">Save</button>
          <button onClick={() => setEditMode(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Cancel</button>
        </>
      ) : (
        <>
          <h2 className="text-lg font-semibold">{thread.title}</h2>
          <p className="mt-2">{thread.content}</p>
          <button onClick={() => removeThread(thread.id)} className="bg-red-500 text-white px-4 py-2 mr-2 rounded-xl mt-2">Remove</button>
          <button onClick={() => setEditMode(true)} className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-2">Edit</button>
        </>
      )}
      <ReplyList replies={thread.replies} removeReply={(replyId) => removeReply(thread.id, replyId)} />
      <ReplyForm addReply={(replyContent) => addReply(thread.id, replyContent)} />
    </div>
  );
};

const ReplyList = ({ replies, removeReply }) => (
  <div className="space-y-2 mt-4">
    {replies.map(reply => (
      <div key={reply.id} className="border p-2 rounded flex justify-between items-center">
        <p>{reply.content}</p>
        <button onClick={() => removeReply(reply.id)} className="bg-red-500 text-white px-2 py-1 rounded-xl">Delete</button>
      </div>
    ))}
  </div>
);

const ReplyForm = ({ addReply }) => {
  const [replyContent, setReplyContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReply(replyContent);
    setReplyContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <textarea
        placeholder="Your reply"
        value={replyContent}
        onChange={(e) => setReplyContent(e.target.value)}
        className="border rounded-2xl px-2 py-1 w-full"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-xl">
        Reply
      </button>
    </form>
  );
};

const ThreadForm = ({ addThread }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addThread(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Thread title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-2xl px-2 py-6 w-1/3"
      />
      <textarea
        placeholder="Thread content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border rounded-2xl px-2 py-6 mt-6 w-full"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-xl">
        Create Thread
      </button>
    </form>
  );
};

export default Forum;
