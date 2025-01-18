import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public final class ImmutableClass {
    private final int id;
    private final String name;
    private final List<String> items;

    // Constructor to initialize all fields
    public ImmutableClass(int id, String name, List<String> items) {
        this.id = id;
        this.name = name;
        this.items = new ArrayList<>(items); // Defensive copy
    }

    // Getters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<String> getItems() {
        return Collections.unmodifiableList(items); // Unmodifiable view
    }
}
