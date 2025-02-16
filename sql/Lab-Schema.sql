CREATE DATABASE slack_app;

CREATE TABLE Users (
    id INT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    display_name VARCHAR(100),
    avatar_url VARCHAR(255),
    created_at DATETIME DEFAULT GETDATE()
);

CREATE TABLE Channels (
    id INT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description VARCHAR(255),
    is_private BIT DEFAULT 0,
    created_by INT,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (created_by) REFERENCES Users(id) ON DELETE SET NULL
);

CREATE TABLE Messages (
    id INT PRIMARY KEY,
    channel_id INT,
    sender_id INT,
    content VARCHAR(MAX),
    file_id INT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (channel_id) REFERENCES Channels(id) ON DELETE CASCADE,
    FOREIGN KEY (sender_id) REFERENCES Users(id) ON DELETE SET NULL,
    FOREIGN KEY (file_id) REFERENCES Files(id) ON DELETE SET NULL
);

CREATE TABLE DirectMessages (
    id INT PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    content VARCHAR(MAX),
    file_id INT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (sender_id) REFERENCES Users(id),
    FOREIGN KEY (receiver_id) REFERENCES Users(id),
    FOREIGN KEY (file_id) REFERENCES Files(id)
);

CREATE TABLE Reactions (
    id INT PRIMARY KEY,
    message_id INT,
    user_id INT,
    emoji VARCHAR(10) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (message_id) REFERENCES Messages(id) ,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Files (
    id INT PRIMARY KEY,
    user_id INT,
    file_name VARCHAR(255) NOT NULL,
    file_url VARCHAR(255) NOT NULL,
    file_type VARCHAR(50),
    uploaded_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE SET NULL
);

CREATE TABLE ChannelMembers (
    id INT PRIMARY KEY,
    channel_id INT,
    user_id INT,
    joined_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (channel_id) REFERENCES Channels(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Friends (
    id INT PRIMARY KEY,
    user_id INT,
    friend_id INT,
    status VARCHAR(20) CHECK (status IN ('pending', 'accepted', 'blocked')),
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (friend_id) REFERENCES Users(id)
);
