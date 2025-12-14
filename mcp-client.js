const { spawn } = require('child_process');

const token = 'sbp_df2b0bbae9fb7df807238a707a75c94a8ee1ddd1';
const projectRef = 'vrefamrmisnnpclngmtx';

const child = spawn('npx', [
    '-y',
    '@supabase/mcp-server-supabase@latest',
    '--project-ref',
    projectRef
], {
    env: { ...process.env, SUPABASE_ACCESS_TOKEN: token }
});

let buffer = '';

child.stdout.on('data', (data) => {
    buffer += data.toString();
    const lines = buffer.split('\n');
    buffer = lines.pop();

    for (const line of lines) {
        if (!line.trim()) continue;
        try {
            const msg = JSON.parse(line);
            console.log('Received:', JSON.stringify(msg, null, 2));

            if (msg.id === 1) {
                // Initialized, list tools
                send({
                    jsonrpc: '2.0',
                    id: 2,
                    method: 'tools/list'
                });
            } else if (msg.id === 2) {
                // Tools listed
                console.log('Tools:', JSON.stringify(msg.result.tools, null, 2));
                process.exit(0);
            }

        } catch (e) {
            console.error('Error parsing:', line);
        }
    }
});

child.stderr.on('data', (data) => {
    console.error('Stderr:', data.toString());
});

function send(msg) {
    console.log('Sending:', JSON.stringify(msg));
    child.stdin.write(JSON.stringify(msg) + '\n');
}

// Start initialization
send({
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: { name: 'test-client', version: '1.0.0' }
    }
});
