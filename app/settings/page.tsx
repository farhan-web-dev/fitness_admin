'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Upload } from 'lucide-react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    enableDarkMode: false,
    enableNotifications: true,
    emailNotifications: true,
    pushNotifications: false,
    brandName: 'Basecamp Admin',
    primaryColor: '#8b5cf6',
    secondaryColor: '#06b6d4',
  });

  const handleSave = () => {
    console.log('Saving settings:', settings);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">
          Configure app preferences, update your profile, and manage account
          settings.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>General Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="enable-dark-mode">Enable Dark Mode</Label>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Switch to dark theme
                </span>
                <Switch
                  id="enable-dark-mode"
                  checked={settings.enableDarkMode}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, enableDarkMode: checked })
                  }
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label htmlFor="enable-notifications">
                Receive Email Notifications
              </Label>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Get email updates
                </span>
                <Switch
                  id="enable-notifications"
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, emailNotifications: checked })
                  }
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label>Default Currency</Label>
              <Select defaultValue="gbp">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gbp">GBP (£)</SelectItem>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label>Time Zone</Label>
              <Select defaultValue="london">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="london">London (GMT)</SelectItem>
                  <SelectItem value="new-york">New York (EST)</SelectItem>
                  <SelectItem value="tokyo">Tokyo (JST)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label htmlFor="auto-sign-out">Auto Sign-Out (min)</Label>
              <Input
                id="auto-sign-out"
                type="number"
                defaultValue="30"
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Brand & Appearance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="brand-name">Brand Name</Label>
              <Input
                id="brand-name"
                value={settings.brandName}
                onChange={(e) =>
                  setSettings({ ...settings, brandName: e.target.value })
                }
              />
            </div>

            <Separator />

            <div className="space-y-3">
              <Label>Brand Colors</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div
                    className="h-10 w-10 rounded border"
                    style={{ backgroundColor: settings.primaryColor }}
                  />
                  <div className="flex-1 space-y-1">
                    <Label className="text-xs">Primary Color</Label>
                    <Input
                      type="color"
                      value={settings.primaryColor}
                      onChange={(e) =>
                        setSettings({ ...settings, primaryColor: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="h-10 w-10 rounded border"
                    style={{ backgroundColor: settings.secondaryColor }}
                  />
                  <div className="flex-1 space-y-1">
                    <Label className="text-xs">Secondary Color</Label>
                    <Input
                      type="color"
                      value={settings.secondaryColor}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          secondaryColor: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label>Logo & Favicon</Label>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Logo
                </Button>
                <Button variant="outline" className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Favicon
                </Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label htmlFor="footer-text">Footer Text</Label>
              <Input
                id="footer-text"
                defaultValue="© 2024 Basecamp Admin. All rights reserved."
              />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Typography Samples</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label>Brand Font Family</Label>
              <Select defaultValue="inter">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inter">Inter</SelectItem>
                  <SelectItem value="roboto">Roboto</SelectItem>
                  <SelectItem value="open-sans">Open Sans</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-2xl font-bold text-gray-900">
                  Settings
                </p>
                <p className="mt-1 text-base font-semibold text-gray-700">
                  General Preferences
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Make your text more legible, enjoy body copy with better
                  spacing, and enjoy a great visual experience.
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label>Font Styles</Label>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Regular</span>
                  <span className="font-normal">400</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Medium</span>
                  <span className="font-medium">500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Semibold</span>
                  <span className="font-semibold">600</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Bold</span>
                  <span className="font-bold">700</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input
                  id="full-name"
                  defaultValue="Admin User"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="admin@basecamp.com"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  defaultValue="+44 20 1234 5678"
                  placeholder="Enter your phone"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border-2 border-dashed p-6">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-600 text-2xl text-white">
                  A
                </AvatarFallback>
              </Avatar>
              <Button variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Upload Photo
              </Button>
              <p className="text-center text-xs text-gray-500">
                Recommended: Square image, at least 400x400px
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-violet-600 hover:bg-violet-700" onClick={handleSave}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}
