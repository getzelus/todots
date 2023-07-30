"use client"

type TodoItemProps = {
  id: string
  title: string
  complete: boolean,
  createdAt: Date,
  toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({ id, title, complete, createdAt, toggleTodo }: TodoItemProps) {
 // if (complete) return;
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      <span className='italic'> - {createdAt.toLocaleString()}</span>
    </li>
  )
}
