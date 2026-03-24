package com.example.todo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase;

import com.example.todo.model.Todo;
import com.example.todo.repository.TodoRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
public class TodoRepositoryTests {

    @Autowired
    private TodoRepository repository;

    @Test
    public void testSaveAndFindTodo() {
        // 1. Create a new Todo object using the setter
        Todo todo = new Todo();
        todo.setTask("Finish CI/CD Tutorial");
        todo.setCompleted(false);

        // 2. Save it to the database
        Todo savedTodo = repository.save(todo);

        // 3. Assertions (The "Check" part of the test)
        assertNotNull(savedTodo.getId()); // Ensure MySQL generated an ID
        assertEquals("Finish CI/CD Tutorial", savedTodo.getTask());
    }
}