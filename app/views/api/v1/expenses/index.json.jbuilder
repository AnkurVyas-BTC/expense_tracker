json.array!(@expenses) do |expense|
  json.extract! expense, :id, :title, :price
  json.date expense.date.strftime('%Y-%m-%d')
end
