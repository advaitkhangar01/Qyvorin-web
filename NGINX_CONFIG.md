# Nginx Configuration for Single Page Applications (SPA)

The "404 Not Found" error you are seeing when refreshing pages on your hosted website (like `/about` or `/contact`) occurs because the web server (Nginx) tries to find a file named `about` or `contact` in the directory, but these are virtual routes handled by React, not real files.

To fix this, you need to configure Nginx to redirect all non-file requests to `index.html`, allowing React to handle the routing.

## Instructions for Hostinger VPS

1.  **SSH into your VPS**:
    ```bash
    ssh root@<your-vps-ip>
    ```

2.  **Locate your Nginx configuration file**:
    Usually located at `/etc/nginx/sites-available/default` or `/etc/nginx/sites-available/your-domain`.

3.  **Edit the file**:
    ```bash
    nano /etc/nginx/sites-available/default
    # OR
    nano /etc/nginx/sites-available/your-domain
    ```

4.  **Update the `location /` block**:
    Find the `location /` block inside the `server` block and ensure it looks like this:

    ```nginx
    location / {
        try_files $uri $uri/ /index.html;
    }
    ```

    **What this does:**
    - `try_files`: Checks for files in order.
    - `$uri`: Checks if the requested path exists as a file (e.g., image.png).
    - `$uri/`: Checks if it exists as a directory.
    - `/index.html`: If neither exists, it serves `index.html` (this is the key for React Router).

5.  **Test the configuration**:
    ```bash
    nginx -t
    ```
    Ensure it says "syntax is ok" and "test is successful".

6.  **Restart Nginx**:
    ```bash
    systemctl restart nginx
    ```

## Example Configuration

Here is a typical complete server block for reference:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /var/www/your-project/dist; # Point to your build folder
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Optional: Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```
